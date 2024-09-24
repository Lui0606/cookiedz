const krugsContainer = document.getElementById('krugs-container')
const app = document.getElementById('app')
const rem = document.getElementById('rem')

// const Cookie = {
//     set(key, value, properties = {}) {
//         let result = `${key}=${value}`;
//         for (let field in properties)
//             result += `; ${field}=${properties[field]}`;
//         document.cookie = result
//     },
//     get(key) {
//         for (let el of document.cookie.split(`; `)) {
//             const pair = el.split(`=`)
//             if (pair[0] == key)
//                 return pair[1]
//         }
//     },
//     remove(key) {
//         this.set(key, '', {'max-age': 0})
//     }
// }

let krugsCount = parseInt(getCookie('krugsContainer')) || 3;

function createKrugs() {
    krugsContainer.innerHTML = '';
    for (let i = 0; i < krugsCount; i++) {
      const krugs = document.createElement('div');
      krugs.className = 'krugs';
      krugsContainer.appendChild(krugs);
    }
    document.cookie = `krugsCount=${krugsCount}`;
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
}

createKrugs()

app.addEventListener('click', () => {
    krugsCount++;
    createKrugs();
});

rem.addEventListener('click', () => {
    if (krugsCount > 1) {
      krugsCount--;
      createKrugs();
    }
});