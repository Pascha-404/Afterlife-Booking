const container = document.querySelector('.container');
const leftSplit = document.querySelector('.left');
const rightSplit = document.querySelector('.right');

leftSplit.addEventListener('mouseenter', () => {
    container.classList.add('hoverLeft');
})

leftSplit.addEventListener('mouseleave', () => {
    container.classList.remove('hoverLeft');
})

rightSplit.addEventListener('mouseenter', () => {
    container.classList.add('hoverRight');
})

rightSplit.addEventListener('mouseleave', () => {
    container.classList.remove('hoverRight');
})