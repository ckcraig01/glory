// Glory · 推薦榜單渲染
// 從 data/newsletters.json 讀資料，渲染卡片，提供主題篩選。
// 不依賴任何框架，直接掛在 recommendations.html。

(async function () {
  const grid = document.getElementById('grid');
  const empty = document.getElementById('empty');
  const filterButtons = document.querySelectorAll('.filters button');
  if (!grid) return;

  const FREQ_LABEL = {
    daily: '每日',
    weekly: '每週',
    biweekly: '雙週',
    monthly: '每月',
    irregular: '不定期',
  };

  const LANG_LABEL = {
    'zh-Hant': '繁中',
    'zh-Hans': '簡中',
    en: 'English',
    ja: '日本語',
    mixed: '雙語',
  };

  let items = [];
  try {
    const res = await fetch('data/newsletters.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    items = (data.items || []).filter((it) => it.active !== false);
  } catch (err) {
    empty.textContent = '榜單載入失敗：' + err.message;
    return;
  }

  if (items.length === 0) {
    empty.innerHTML = `
      <p>第一份推薦正在路上。</p>
      <p style="font-size:14px;margin-top:8px;">
        編輯 <code>data/newsletters.json</code> 新增條目，重新整理即會出現。
        欄位定義請見 <code>data/newsletters.schema.json</code>，範例見
        <code>data/newsletters.example.json</code>。
      </p>`;
    return;
  }

  // featured 優先，其後依加入日期新到舊
  items.sort((a, b) => {
    if (!!b.featured - !!a.featured) return !!b.featured - !!a.featured;
    return (b.added || '').localeCompare(a.added || '');
  });

  function render(filter) {
    const visible = filter === 'all'
      ? items
      : items.filter((it) => (it.topics || []).includes(filter));

    if (visible.length === 0) {
      grid.innerHTML = `<p class="empty">這個分類還沒有推薦。</p>`;
      return;
    }

    grid.innerHTML = visible.map(card).join('');
  }

  function card(it) {
    const tags = (it.topics || []).map((t) => `<span class="tag">${escape(t)}</span>`).join('');
    const badges = [];
    if (it.featured) badges.push('<span class="badge featured">本週主打</span>');
    if (it.sponsored) badges.push('<span class="badge sponsored">合作</span>');
    else if (it.has_referral) badges.push('<span class="badge partner">合作</span>');

    const highlight = it.highlight
      ? `<p class="card-highlight">${escape(it.highlight)}</p>`
      : '';

    const scores = [];
    if (it.design_score) scores.push(`<span><span class="score-label">設計</span> <span class="score-value">${it.design_score}/5</span></span>`);
    if (it.depth_score) scores.push(`<span><span class="score-label">深度</span> <span class="score-value">${it.depth_score}/5</span></span>`);

    return `
      <article class="card${it.featured ? ' featured' : ''}">
        <header class="card-meta">
          <span>${LANG_LABEL[it.language] || ''} · ${FREQ_LABEL[it.frequency] || ''}</span>
          <span class="badges">${badges.join('')}</span>
        </header>
        <h2 class="card-name">${escape(it.name)}</h2>
        <p class="card-author">${escape(it.author || '')}</p>
        ${highlight}
        <p class="card-review">${escape(it.review || '')}</p>
        <div class="scores">${scores.join('')}</div>
        <div class="tags">${tags}</div>
        <footer class="card-footer">
          <a class="home-link" href="${escapeAttr(it.url)}" target="_blank" rel="noopener">官網 ↗</a>
          <a class="subscribe-link" href="${escapeAttr(it.subscribe_url)}" target="_blank" rel="noopener sponsored">前往訂閱 →</a>
        </footer>
      </article>`;
  }

  function escape(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));
  }
  function escapeAttr(s) { return escape(s || '#'); }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });

  render('all');
})();
