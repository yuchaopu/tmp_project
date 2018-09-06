const iconTypes = {
    success: '#icon-chenggong',
    error: '#icon-cuowu'
}

const create = (text, type, autoClose, duration) => {
    let toast = document.createElement('div');
    let mask = document.createElement('div');
    let panel = document.createElement('div');
    let close;
    

    mask.setAttribute('class', 'b-toast-mask');
    panel.setAttribute('class', 'b-toast-panel');
    toast.setAttribute('class', 'b-toast');

    let content = `<svg class="b-toast-panel-icon"><use xlink:href="${iconTypes[type]}"></use></svg><span class="b-toast-panel-text">${text}</span>`;

    panel.innerHTML = content;

    if (!autoClose) {
        close = document.createElement('span');
        close.setAttribute('class', 'b-toast-panel-close');
        close.addEventListener('touchstart', e => {
            remove(toast, panel);
        });
        panel.appendChild(close);
    }
    if (autoClose || duration) {
        setTimeout(() => {
            remove(toast, panel);
        }, duration);
    }
    
    toast.appendChild(mask);
    toast.appendChild(panel);
    document.body.appendChild(toast);

    panel.className += ' enter';

    toast.addEventListener('touchstart', e => {
        e.preventDefault();
    });
}

const remove = (toast, panel) => {
    panel.className += ' leave';
    setTimeout(() => {
        toast.remove();
    }, 370);
}

const $Toast = {
    name: 'Toast',

    success (options) {
        create(options.text, 'success', options.autoClose, options.duration || 1000);
    },

    error (options) {
        create(options.text, 'error', options.autoClose, options.duration || 1000);
    }
}

const install = Vue => {
    Vue.prototype.$Toast = $Toast;
}

module.exports = {
    install
}