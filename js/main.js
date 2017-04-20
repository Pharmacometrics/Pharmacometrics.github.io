document.addEventListener('DOMContentLoaded', function() {
    var tables = document.querySelectorAll('table[data-caption]');
    Array.prototype.forEach.call(tables, function(node) {
        var captionText = node.getAttribute('data-caption');
        var caption = document.createElement('caption');
        caption.innerText = captionText;
        node.insertBefore(caption, node.firstChild);
    });
});
