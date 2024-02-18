// main.js
const c = document.getElementById("matrixCanvas");
const ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;

const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%".split("");
const font_size = 10;
const columns = c.width/font_size; 
const drops = Array(columns).fill(1);

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#0F0";
    ctx.font = `${font_size}px arial`;

    for(let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        
        if(drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        
        drops[i]++;
    }
}

setInterval(draw, 33);

document.getElementById("search-bar").addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        const query = event.target.value;
        window.location.href = `https://search.bus-hit.me/?preferences=eJx1WMuS6zYO_Zp4o4prMpmqVBZeTSXzA9mrIBKScCUSvHzYVn_9gJZkka3uRavMQxIE8TgAW0HEgT1huA1o0cN8mcEOCQa8wSwDVjDjbUwXSJEVGzdjxJtOasp_A1_IyNrWeX4ut398wovBOLK-_e-vfy4BegwIXo23f13iiAZvgbKIi8eQ5hhatq3FRxuhWzdrplbmeL6jvzHI8Mp-uKy72hAXUSZrclFoI_oWZhqskd_rdtB3sAp1u536N8wBLz8T-qUl20aKsv-1kmxPlqLIVJ7neQXXXVkptdplEUEzqk36yHHCJdw09iDaXzQF6GY5De1AVkz45wBD2wZWBHNjUBP88u__grUQmiyY7ti2Pc0YMuymxpD37EtMbtnItwmRfbnYgmKroW0p5qGPpOR3Nn2e7sBqBca1rUmBlCAPmshlBdp282teRjPlv7a9k0Z-7aTYiR8xbpI711U7oqZhOPRQSv0a78V-dmjFVQELbdSI_cRix5bF5z4jnkPw2IttFKE4aMUe-k7i_OK8Bd2nYbOKLcRnUGJGoPzNkpKfCct9gng5ZqmuAqMduS8hjfghMfQ2msYQIVI4FNd4J7BR7F0ooPXQSAjk8CG2oZSIcinSx_7sBg2x8sLqZANOdso37zL8Y_fWvjNKQC3VpTAuhu0s-LHqt2ehV68958N3Z_UzqcmXCzxiE7iPD_DYaPIS2TnGV9f3nuxEUMZVvyzFZUQVSuEw1yDZBN22W7HGDv2wDQdm7RF0YUuBBrm4m2HJIR4ORcsZwxIToYgwI5nocz6Rehn7rdzgWOvSfSN0HvJn02EECWy_hsoLIKO7Qx8yQyqtQxaKY8nKT-IUvsb2M39QGPmQKfnlwS9N9lqg4or7BPeNXGMQiiuvIk4d7lWQzNyFiFe_qw4f8-JJFScLzYJyYLcFhp5q5qSLBQ_TzaVM68y22C4Ah26sl4D4Kak9Oi70d2JLGCjsPOEo0y-GMi9cjuFCzGt8falzaCVOUxAkujU-D7u51F0l1zbhnmMUSmdxPWMRQQEdwcbRxzGBk7Bfffd1UY7JJn_eEQ4Gsid2IKCR7CbVBDXyDL7kp8jTwpHFvVM28m6ImC8ryyGVpi3RjZViFWzJBgnvMJY0AjRLRmcOKW5zJ4NcjKX6PoXdfc3kmVc65il8Bn8mjvgZFAt5dUYdqleqfQMfphA4awmZKkpmy8RPcfks4c5Lbgk-odI7CH2F64nPHzyvjnFjdUdNKn6wrQSZxQhZSh5FDzbMQg0FP_32--9_PA9P6aTRlsHzYcFUwjLVOJo5Hqss3DOlHIt86pYBzZ6HDtHH1JXZ8qrzsn3KxeyBXTG1QF2D8vhc0HySRC0lPthrS1NhbH7SxFZSpAmLZStWKC-Gk68r4gqdDlrh9ZgygX64q3uUphLrqlgqHu5DJoTSa9IdjmIsW2LiZiNlsXJ9jP5KhfAlGTMvFWUeNLdG6pjiUUZKYW4argPvTHFBW7dfOecb4dL0bLIq72bpSfcynDth27otssPZWC-0suoLOVlPc64yzZj2Snj0xlU0v9HzUcXcWfwxVylT4A_M4eerQh2z4VYTUjx0WyttqddWe086bXh15oaddNzwL0h03M57HS4cMEEoiyIaszSZGFLupV6kU_fO64oU0H83J1UqfjeXJYspztMfv271-NDFSFFizfabw97To5C4sP0XK_S7FIP0Ubh3IbmYgrRauQ0MGCti3eek_EmvBls7Wc9LMiJGaRT3btHpTD_HIifPklxCtlnywoodFFdzHveiWaTSDp5df0ztnv5qWxUZcgGTqbjQanF7Av58SJEthbyAWsAKnVRZ4VPAeZA2rOmk2Q5lAyhG1hRPnpGmXk0svN7P_NhJIUypSzamvTXM7YyVlmp9pn0RyiE59Cm8_Rryq8B9KnTycCUtPbVfw273wAJjTWQvoLbAwulTYXkjx6OuOxXbSoa8I4Tiq8aEOfa52fIns0gC3CvlX8C5Pq_wyQcrXBNk_M_-Vjzexm5Ows7hlsPmed1G11HSVsoxymNf-qLVwNUChnb9X8DDyyv9TfXfSMud1To4CZIHfC9v_55PM-KnVt6qajrP-NfToZWHpWhgcuxcpB-UZLz9HwPifq8=&q=${query}`;
    }
});

function updateTimeCalendar() {
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    const date = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;
    document.getElementById('time-calendar').innerHTML = `Time: ${time}<br>Date: ${date}`;

    setTimeout(updateTimeCalendar, 1000);
}

updateTimeCalendar();
