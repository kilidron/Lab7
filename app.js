
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <h1>Захищений веб-сервер</h1>
        <p>Лабораторна робота №7</p>
        <p>Аналіз безпеки CI/CD та контейнерів</p>
        <p>Сервер успішно працює!</p>
    `);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server started on port ${PORT}`);
});
