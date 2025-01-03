document.addEventListener('DOMContentLoaded', function() {
    // 为每个section添加动画延迟
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.setProperty('--animation-order', index + 1);
    });

    // 添加打字机效果
    const welcomeText = document.querySelector('.welcome h2');
    if (welcomeText) {
        const originalText = welcomeText.textContent;
        welcomeText.textContent = '';
        typeWriter(welcomeText, originalText);
    }

    // 添加交互效果
    addInteractiveEffects();
});

// 打字机效果函数
function typeWriter(element, text, speed = 50) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

// 添加交互效果
function addInteractiveEffects() {
    // 高亮显示重要信息
    const highlights = document.querySelectorAll('.highlight');
    highlights.forEach(highlight => {
        highlight.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        highlight.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // 添加列表项悬浮效果
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.paddingLeft = '2rem';
            this.style.transition = 'padding-left 0.3s ease';
        });
        item.addEventListener('mouseout', function() {
            this.style.paddingLeft = '1.5rem';
        });
    });
}

// 添加PDF导出功能（需要引入html2pdf库）
function exportToPDF() {
    const element = document.querySelector('.offer-container');
    const opt = {
        margin: 1,
        filename: '入职通知书.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // 需要先引入html2pdf.js库
    // html2pdf().set(opt).from(element).save();
}

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});