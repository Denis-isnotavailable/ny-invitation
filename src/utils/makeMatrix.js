export const makeMatrix = () => {
    const C = document.querySelector("canvas"),
        $ = C.getContext("2d"),
        W = (C.width = window.innerWidth - 4),
        H = (C.height = window.innerHeight - 4);

    const str = "A+B0V-G1D=E2U J3Z I4Z K5L M6H O7П P8C T9Y F!X C?V S.RW,W &:#$;F",
        matrix = str.split("");

    let font = 11,
        col = W / font,
        arr = [];

    for (let i = 0; i < col; i++) arr[i] = 1;

    function draw() {
        $.fillStyle = "rgba(0,0,0,.05)";
        $.fillRect(0, 0, W, H);
        $.fillStyle = "#0f0";
        $.font = font + "px system-ui";
        for (let i = 0; i < arr.length; i++) {
            let txt = matrix[Math.floor(Math.random() * matrix.length)];
            $.fillText(txt, i * font, arr[i] * font);
            if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
            arr[i]++;
        }
    }

    setInterval(draw, 123);

    window.addEventListener("resize", () => window.location.reload());
}