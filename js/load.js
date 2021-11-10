export function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript'
    script.src = url;
    script.onload = callback;

    document.body.appendChild(script);
}