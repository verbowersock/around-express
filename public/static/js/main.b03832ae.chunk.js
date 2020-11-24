(this['webpackJsonparound-react'] = this['webpackJsonparound-react'] || []).push([[0], {
  15(e, t, a) {},
  16(e, t, a) {
    a.r(t); const n = a(0); const o = a(1); const i = a.n(o); const c = a(6); const r = a.n(c); const s = (a(15), a(9)); const u = a(2); const l = `${a.p}static/media/logo.4e8e0a1d.svg`; const p = function () { return Object(n.jsx)('header', { className: 'header', children: Object(n.jsx)('img', { className: 'header__logo', src: l, alt: 'Around the US logo' }) }); }; const d = function () { return Object(n.jsx)('footer', { children: Object(n.jsx)('p', { className: 'footer__copyright', children: '\xa9 2020. Veronika Bowersock' }) }); }; const j = i.a.createContext(); const m = function (e) {
      const t = i.a.useContext(j); const a = t && e.card.owner._id === t._id; const o = 'images__delete  '.concat(a ? '' : 'images__delete_hidden'); const c = e.card.likes.some(((e) => t && e._id === t._id)); const r = 'images__like-button  '.concat(c ? 'images__like-button_active' : ''); return Object(n.jsxs)('li', {
        className: 'images__card',
        children: [Object(n.jsx)('div', {
          className: 'images__picture', style: { backgroundImage: 'url('.concat(e.card.link, ')') }, onClick(t) { t.target.localName !== 'button' && e.onCardClick(e.card); }, children: Object(n.jsx)('button', { className: o, 'aria-label': 'Delete image', onClick() { e.onCardDelete(e.card); } }),
        }), Object(n.jsxs)('div', { className: 'images__caption', children: [Object(n.jsx)('p', { className: 'images__text', children: e.card.name }), Object(n.jsxs)('div', { className: 'images__like', children: [Object(n.jsx)('button', { className: r, 'aria-label': 'Like image', onClick() { e.onCardLike(e.card); } }), Object(n.jsx)('span', { className: 'images__like-count', children: e.card.likes.length })] })] })],
      });
    }; const _ = function (e) {
      const t = i.a.useContext(j); return Object(n.jsxs)('main', {
        className: 'main-content',
        children: [Object(n.jsxs)('section', { className: 'profile', children: [Object(n.jsx)('img', { className: 'profile__image', src: t && t.avatar, alt: 'profile pic' }), Object(n.jsx)('div', { className: 'profile__overlay', onClick: e.onEditAvatar, children: Object(n.jsx)('button', { className: 'profile__overlay_button', 'aria-label': 'change avatar' }) }), Object(n.jsxs)('div', { className: 'profile__description', children: [Object(n.jsxs)('div', { className: 'profile__name', children: [Object(n.jsx)('h1', { className: 'profile__text', children: t && t.name }), Object(n.jsx)('button', { className: 'profile__edit', 'aria-label': 'Edit profile', onClick: e.onEditProfile })] }), Object(n.jsx)('p', { className: 'profile__occupation', children: t && t.about })] }), Object(n.jsx)('button', { className: 'profile__add', 'aria-label': 'Add image', onClick: e.onAddPlace })] }), Object(n.jsx)('section', {
          className: 'images',
          children: Object(n.jsx)('ul', {
            className: 'images__list',
            children: e.cards.map(((t) => Object(n.jsx)(m, {
              card: t, onCardClick: e.onCardClick, onCardLike: e.onCardLike, onCardDelete: e.onCardDelete,
            }, t._id))),
          }),
        })],
      });
    }; const h = function (e) {
      return Object(n.jsx)('div', {
        className: 'popup popup_image '.concat(e.card ? '' : 'popup_hidden'),
        children: Object(n.jsxs)('div', {
          className: 'popup__content popup__content_fullscreen',
          children: [Object(n.jsx)('button', {
            name: 'close_button', className: 'popup__close popup__close_image', 'aria-label': 'Close popup', onClick: e.onClose,
          }), Object(n.jsx)('img', { className: 'images__picture images__picture_fullscreen', src: e.card ? e.card.link : '', alt: e.card ? e.card.name : '' }), Object(n.jsx)('p', { className: 'images__text images__text_fullscreen', children: e.card ? e.card.name : '' })],
        }),
      });
    }; const f = a(7); const b = a(8); const O = new (function () { function e(t) { Object(f.a)(this, e), this.url = t.baseUrl, this.authorization = t.authorization; } return Object(b.a)(e, [{ key: 'getInitialCards', value() { return fetch(`${this.url}cards`, { headers: { authorization: this.authorization } }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }, { key: 'getUserInfo', value() { return fetch(`${this.url}users/me`, { headers: { authorization: this.authorization } }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }, { key: 'updateUserInfo', value(e) { return fetch(`${this.url}users/me`, { method: 'PATCH', headers: { authorization: this.authorization, 'Content-Type': 'application/json' }, body: JSON.stringify({ name: e.name, about: e.about }) }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }, { key: 'postNewCard', value(e) { return fetch(`${this.url}cards`, { method: 'POST', headers: { authorization: this.authorization, 'Content-Type': 'application/json' }, body: JSON.stringify({ name: e.title, link: e.url }) }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }, { key: 'deleteCard', value(e) { return fetch(`${this.url}cards/${e}`, { method: 'DELETE', headers: { authorization: this.authorization, 'Content-Type': 'application/json' } }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }, { key: 'addLike', value(e, t) { const a = t ? 'DELETE' : 'PUT'; return fetch(`${this.url}cards/likes/${e}`, { method: a, headers: { authorization: this.authorization } }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }, { key: 'updateAvatar', value(e) { return fetch(`${this.url}users/me/avatar`, { method: 'PATCH', headers: { authorization: this.authorization, 'Content-Type': 'application/json' }, body: JSON.stringify({ avatar: e }) }).then(((e) => (e.ok ? e.json() : Promise.reject('Error: '.concat(e.status))))); } }]), e; }())({ baseUrl: 'https://around.nomoreparties.co/v1/group-5/', authorization: 'c3db06be-da70-4990-b8ca-8515a1d7c281' }); const v = function (e) {
      const t = e.isOpen ? '' : 'popup_hidden'; return Object(n.jsx)('div', {
        className: 'popup popup_form-'.concat(e.name, ' ').concat(t),
        children: Object(n.jsx)('div', {
          className: 'popup__content',
          children: Object(n.jsxs)('form', {
            className: 'popup__form popup__form_'.concat(e.name),
            noValidate: !0,
            onSubmit: e.onSubmit,
            children: [Object(n.jsx)('button', {
              name: 'close_button', className: 'popup__close popup__close_form-'.concat(e.name), type: 'reset', 'aria-label': 'Close', onClick: e.onClose,
            }), Object(n.jsx)('h2', { className: 'popup__title', children: e.title }), e.children],
          }),
        }),
      });
    }; const x = function (e) {
      const t = i.a.useState(''); const a = Object(u.a)(t, 2); const o = a[0]; const c = a[1]; const r = i.a.useState(''); const s = Object(u.a)(r, 2); const l = s[0]; const p = s[1]; const d = i.a.useContext(j); return i.a.useEffect((() => { c(d && d.name), p(d && d.about); }), [d]), Object(n.jsxs)(v, {
        onClose: e.onClose,
        name: 'edit',
        title: 'Edit Profile',
        isOpen: e.isOpen,
        onSubmit(t) { t.preventDefault(), e.onUpdateUser({ name: o, about: l }); },
        children: [Object(n.jsx)('input', {
          type: 'text', placeholder: 'Name', id: 'name-input', className: 'popup__field popup__field_name', name: 'name', value: o || '', required: !0, minLength: 2, maxLength: 40, onChange(e) { c(e.target.value); },
        }), Object(n.jsx)('span', { className: 'popup__input-error', id: 'name-input-error' }), Object(n.jsx)('input', {
          type: 'text', placeholder: 'About', id: 'about-input', className: 'popup__field popup__field_about', name: 'about', value: l || '', required: !0, minLength: 2, maxLength: 200, onChange(e) { p(e.target.value); },
        }), Object(n.jsx)('span', { className: 'popup__input-error', id: 'about-input-error' }), Object(n.jsx)('input', {
          type: 'submit', className: 'popup__save', 'aria-label': 'Save', defaultValue: 'Save',
        })],
      });
    }; const g = function (e) {
      const t = i.a.useRef(''); return Object(n.jsxs)(v, {
        onClose: e.onClose,
        name: 'avatar',
        title: 'Change profile picture',
        isOpen: e.isOpen,
        onSubmit(a) { a.preventDefault(), e.onUpdateAvatar({ avatar: t }); },
        children: [Object(n.jsx)('input', {
          type: 'url', placeholder: 'Avatar Link', id: 'link-input', name: 'link', required: !0, className: 'popup__field popup__field_link', ref: t,
        }), Object(n.jsx)('span', { className: 'popup__input-error', id: 'link-input-error' }), Object(n.jsx)('input', {
          type: 'submit', className: 'popup__save', 'aria-label': 'Save', defaultValue: 'Save',
        })],
      });
    }; const C = function (e) {
      const t = i.a.useState(''); const a = Object(u.a)(t, 2); const o = a[0]; const c = a[1]; const r = i.a.useState(''); const s = Object(u.a)(r, 2); const l = s[0]; const p = s[1]; return Object(n.jsxs)(v, {
        onClose: e.onClose,
        onSubmit(t) { t.preventDefault(), e.onAddCard({ title: o, url: l }); },
        name: 'add',
        title: 'New Place',
        isOpen: e.isOpen,
        children: [Object(n.jsx)('input', {
          type: 'text', placeholder: 'Title', id: 'title-input', required: !0, minLength: 1, maxLength: 30, name: 'name', className: 'popup__field popup__field_title', onChange(e) { c(e.target.value); },
        }), Object(n.jsx)('span', { className: 'popup__input-error', id: 'title-input-error' }), Object(n.jsx)('input', {
          type: 'url', placeholder: 'Image Link', id: 'link-input', name: 'link', required: !0, className: 'popup__field popup__field_link', onChange(e) { p(e.target.value); },
        }), Object(n.jsx)('span', { className: 'popup__input-error', id: 'link-input-error' }), Object(n.jsx)('input', {
          type: 'submit', className: 'popup__save', 'aria-label': 'Save', defaultValue: 'Save',
        })],
      });
    }; const k = function () {
      const e = i.a.useState(!1); const t = Object(u.a)(e, 2); const a = t[0]; const o = t[1]; const c = i.a.useState(!1); const r = Object(u.a)(c, 2); const l = r[0]; const m = r[1]; const f = i.a.useState(!1); const b = Object(u.a)(f, 2); const v = b[0]; const k = b[1]; const N = i.a.useState(null); const y = Object(u.a)(N, 2); const S = y[0]; const E = y[1]; const P = i.a.useState(null); const L = Object(u.a)(P, 2); const z = L[0]; const A = L[1]; const U = i.a.useState([]); const T = Object(u.a)(U, 2); const D = T[0]; const I = T[1]; function w() { k(!1), o(!1), m(!1), E(null); } return i.a.useEffect((() => { O.getInitialCards().then(((e) => { I(e); })).catch(((e) => { console.log(e); })); }), []), i.a.useEffect((() => { O.getUserInfo().then(((e) => { A(e); })).catch(((e) => { console.log(e); })); }), []), Object(n.jsx)(j.Provider, {
        value: z,
        children: Object(n.jsxs)('div', {
          className: 'page',
          children: [Object(n.jsx)(p, {}), Object(n.jsx)(_, {
            onEditProfile() { o(!0); }, onAddPlace() { m(!0); }, onEditAvatar() { k(!0); }, onCardClick(e) { E(e); }, cards: D, onCardDelete(e) { O.deleteCard(e._id).then((() => { const t = D.filter(((t) => t._id !== e._id)); I(t); })).catch(((e) => { console.log(e); })); }, onCardLike(e) { const t = e.likes.some(((e) => e._id === z._id)); O.addLike(e._id, t).then(((t) => { const a = D.map(((a) => (a._id === e._id ? t : a))); I(a); })).catch(((e) => { console.log(e); })); },
          }), Object(n.jsx)(x, { isOpen: a, onClose: w, onUpdateUser(e) { const t = e.name; const a = e.about; O.updateUserInfo({ name: t, about: a }).then(((e) => { A(e); })).catch(((e) => { console.log(e); })), w(); } }), Object(n.jsx)(C, { isOpen: l, onClose: w, onAddCard(e) { const t = e.title; const a = e.url; O.postNewCard({ title: t, url: a }).then(((e) => { I([e].concat(Object(s.a)(D))); })).catch(((e) => { console.log(e); })), w(); } }), Object(n.jsx)(g, { isOpen: v, onClose: w, onUpdateAvatar(e) { const t = e.avatar; O.updateAvatar(t.current.value).then(((e) => { A(e); })).catch(((e) => { console.log(e); })), w(); } }), Object(n.jsx)(h, { onClose: w, card: S }), Object(n.jsx)(d, {})],
        }),
      });
    }; const N = function (e) { e && e instanceof Function && a.e(3).then(a.bind(null, 17)).then(((t) => { const a = t.getCLS; const n = t.getFID; const o = t.getFCP; const i = t.getLCP; const c = t.getTTFB; a(e), n(e), o(e), i(e), c(e); })); }; r.a.render(Object(n.jsx)(i.a.StrictMode, { children: Object(n.jsx)(k, {}) }), document.getElementById('root')), N();
  },
}, [[16, 1, 2]]]);
// # sourceMappingURL=main.b03832ae.chunk.js.map
