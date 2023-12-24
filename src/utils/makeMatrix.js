export const makeMatrix = () => {
    const C = document.querySelector("canvas")
    const context = C.getContext("2d")
    const width = (C.width = window.innerWidth - 4)
    const height = (C.height = window.innerHeight - 4);

    const str = "βγδζθκλμνξ*+λμνξ^:;らべてわかるできる子的朋友学习汉语السَّاعَةِ الْوَاحِدَةِ ظُهْرإِلَىJZMq[x80^";
    const matrix = str.split("");

    let font = 11;
    let col = width / font;
    let arr = [];

    for (let i = 0; i < col; i++) arr[i] = 1;

    function draw() {
        context.fillStyle = "rgba(0,0,0,.05)";
        context.fillRect(0, 0, width, height);
        context.fillStyle = "#0f0";
        context.font = font + "px system-ui";
        for (let i = 0; i < arr.length; i++) {
            let txt = matrix[Math.floor(Math.random() * matrix.length)];
            context.fillText(txt, i * font, arr[i] * font);
            if (arr[i] * font > height && Math.random() > 0.975) arr[i] = 0;
            arr[i]++;
        }
    }

    setInterval(draw, 123);

    window.addEventListener("resize", () => window.location.reload());
}