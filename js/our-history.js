(function () {
    let tabNav = document.querySelectorAll(".our-history-tabs-item");
    let tabContent = document.querySelectorAll('.our-history-tab-content');
    let tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });
    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active')
        });
        this.classList.add('is-active')
        tabName = this.getAttribute('data-tab-name')
        selectTabContent(tabName)
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active')
        })
    }
    const windowWidth = window.innerWidth;
    const tabsActivate = function (windowWidth) {
        if (windowWidth >= 992) {
            tabContent.forEach(item => {
                item.classList.add('is-active')
            })
        }
    }
    tabsActivate(windowWidth)    
})();