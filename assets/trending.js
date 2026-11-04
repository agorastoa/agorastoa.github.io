/* Agora · Trending Now
   Seasonal section that switches automatically by date.
   To add a season: copy a block in SEASONS, set from/to (MM-DD) and products.
   Preview any season with ?season=christmas in the URL. */
(function () {
  var TAG = 'cesiagarciasa-20';
  var IMG = function (id) { return 'https://m.media-amazon.com/images/I/' + id + '._AC_SL800_.jpg'; };
  var AMZ = function (asin) { return 'https://www.amazon.com/dp/' + asin + '?tag=' + TAG; };

  var SEASONS = [
    {
      key: 'halloween', from: '09-15', to: '10-31', event: '10-31', eventName: 'Halloween',
      kicker: 'Trending now · Spooky season',
      title: 'Halloween & Fall Favorites',
      text: 'Boo baskets, cozy fall gifts and spooky-cute finds everyone is buying right now.',
      cta: { label: 'See all Halloween gifts', href: 'gifts/#boo-basket' },
      products: [
        { name: 'The Boo Basket', price: '$13.99', note: 'Best seller', img: IMG('71ba9UZZWLL'), href: 'https://link.amazon/B0huhJtPb' },
        { name: 'Pumpkin Boo Basket', price: '$15.29', note: '600+ bought last month', img: IMG('81NQstXCH9L'), href: AMZ('B0H2MXPFSY') },
        { name: 'Hey Boo Pink Box', price: '$16.99', note: 'All pink & girly', img: IMG('81YswUDiIiL'), href: AMZ('B0HB3B56R5') },
        { name: 'Deluxe Pink Ghost Basket', price: '$37.99', note: '450+ reviews', img: IMG('81eH56FfO-L'), href: AMZ('B0H691G72W') },
        { name: 'Cozy Fall Gift Basket', price: '$39.99', note: 'Perfect all fall', img: IMG('716waPZWPnL'), href: AMZ('B0DF75LJWC') }
      ]
    },
    {
      key: 'blackfriday', from: '11-01', to: '11-27', event: '11-27', eventName: 'Black Friday',
      kicker: 'Trending now · Black Friday',
      title: 'Black Friday Gift Deals',
      text: 'The Amazon finds selling fastest right now: gifts for her, cozy room glow and viral beauty. Grab them before the deals sell out.',
      cta: { label: 'Shop all Black Friday deals', href: 'deals/black-friday.html' },
      products: [
        { name: 'LANEIGE Lip Sleeping Mask', price: 'Hot deal', note: '50K+ bought last month', img: IMG('51VfrPOslWL'), href: AMZ('B07XXPHQZK') },
        { name: 'Stanley Quencher 40 oz', price: 'Hot deal', note: '10K+ bought last month', img: IMG('41vs1l35W7L'), href: AMZ('B0CRMP3RQT') },
        { name: 'Sunset Lamp Projector', price: 'Hot deal', note: 'Viral room glow', img: IMG('71y7+yUqdSL'), href: AMZ('B0CG4NKPMY') },
        { name: 'Pink Spa Gift Basket', price: 'Hot deal', note: 'Best seller', img: IMG('71evkCK1M-L'), href: AMZ('B0DCN225F9') },
        { name: 'Candle Warmer Lamp', price: 'Hot deal', note: '70K+ bought', img: IMG('71t96oyL+UL'), href: AMZ('B0DZFGTCLR') }
      ]
    },
    {
      key: 'cybermonday', from: '11-28', to: '12-01', event: '11-30', eventName: 'Cyber Monday',
      kicker: 'Trending now · Black Friday weekend',
      title: 'Black Friday to Cyber Monday',
      text: 'Last chance for the best Amazon gift deals of the year: viral beauty, cozy glow and big kitchen upgrades.',
      cta: { label: 'Shop all Black Friday deals', href: 'deals/black-friday.html' },
      products: [
        { name: 'Ninja Air Fryer XL', price: 'Hot deal', note: '10K+ bought last month', img: IMG('61TH-Ig6i-L'), href: AMZ('B0CS3V8M9H') },
        { name: 'Revlon One-Step Volumizer', price: 'Hot deal', note: '20K+ bought last month', img: IMG('61SrWfdHa1L'), href: AMZ('B01LSUQSB0') },
        { name: 'Aurora Galaxy Projector', price: 'Hot deal', note: '10K+ bought last month', img: IMG('81q7oy6dBFL'), href: AMZ('B0B4518KC2') },
        { name: 'Mulberry Silk Pillowcase', price: 'Hot deal', note: 'Luxe self-care', img: IMG('614vZw1DOtL'), href: AMZ('B0CKPKG71N') },
        { name: 'LANEIGE Lip Sleeping Mask', price: 'Hot deal', note: '50K+ bought last month', img: IMG('51VfrPOslWL'), href: AMZ('B07XXPHQZK') }
      ]
    },
    {
      key: 'christmas', from: '12-02', to: '12-31', event: '12-25', eventName: 'Christmas',
      kicker: 'Trending now · Cozy Christmas',
      title: 'Cozy Christmas Gifts',
      text: 'Soft, warm and under $30: the cozy gifts everyone wants under the tree this year.',
      cta: { label: 'See the Christmas gift guide', href: 'gifts/christmas.html' },
      products: [
        { name: 'Candle Warmer Lamp', price: '$19.99', note: '70K+ bought last month', img: IMG('71t96oyL+UL'), href: AMZ('B0DZFGTCLR') },
        { name: 'Sherpa Wearable Blanket', price: '$29.99', note: 'Cozy gift for her', img: IMG('71l0Ob66+UL'), href: AMZ('B0FGTRB7ZG') },
        { name: 'Fluffy Faux Fur Throw', price: '$13.48', note: '20K+ bought last month', img: IMG('71lQ6usyNEL'), href: AMZ('B0BPLB81LX') },
        { name: 'Fuzzy Cozy Socks', price: '$8.99', note: 'Perfect stocking stuffer', img: IMG('71BCwXja2WL'), href: AMZ('B08GHNRG5Q') },
        { name: 'Cloud Socks', price: '$9.99', note: 'Ultra soft', img: IMG('714eFThUDkL'), href: AMZ('B09319MZJN') }
      ]
    }
  ];

  var root = document.getElementById('trending');
  if (!root) return;

  var now = new Date();
  var md = function (d) { return ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); };
  var today = md(now);
  var forced = (location.search.match(/[?&]season=([a-z-]+)/) || [])[1];
  var season = SEASONS.filter(function (s) { return forced ? s.key === forced : (today >= s.from && today <= s.to); })[0];
  if (!season) { root.style.display = 'none'; return; }

  var ev = new Date(now.getFullYear() + '-' + season.event + 'T00:00:00');
  var days = Math.ceil((ev - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 86400000);
  var countdown = days > 1 ? days + ' days until ' + season.eventName : days === 1 ? '1 day until ' + season.eventName : days === 0 ? 'Happy ' + season.eventName + '!' : '';

  var esc = function (t) { return String(t).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var cards = season.products.map(function (p, i) {
    var slug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return '<a class="t-card" href="' + esc(p.href) + '" target="_blank" rel="sponsored nofollow noopener" data-goatcounter-click="trending-' + season.key + '-' + slug + '" data-goatcounter-title="' + esc(p.name) + ' (trending ' + season.key + ')" style="animation-delay:' + (i * 0.08) + 's">' +
      '<div class="t-img"><img src="' + esc(p.img) + '" alt="' + esc(p.name) + '" loading="lazy"><span class="t-note">' + esc(p.note) + '</span></div>' +
      '<div class="t-body"><h3>' + esc(p.name) + '</h3><div class="t-row"><b>' + esc(p.price) + '</b><span>Shop &rarr;</span></div></div></a>';
  }).join('');

  root.className = 'trending season-' + season.key;
  root.innerHTML =
    '<div class="wrap">' +
      '<div class="t-head">' +
        '<div><span class="t-kicker"><i></i>' + esc(season.kicker) + '</span>' +
        '<h2>' + esc(season.title) + '</h2><p>' + esc(season.text) + '</p></div>' +
        (countdown ? '<div class="t-count">' + esc(countdown) + '</div>' : '') +
      '</div>' +
      '<div class="t-row-cards">' + cards + '</div>' +
      '<div class="t-cta"><a class="btn t-btn" href="' + esc(season.cta.href) + '">' + esc(season.cta.label) + '</a></div>' +
    '</div>';
})();
