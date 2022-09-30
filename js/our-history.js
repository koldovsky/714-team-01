(function () {
    const tabNav = document.querySelectorAll(".our-history-tabs-item");
    const tabContent = document.querySelectorAll('.our-history-tab-content');
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

    const tabsActivate = function () {
        const windowWidth = window.innerWidth;
        if (windowWidth >= 992) {
            tabContent.forEach(item => {
                item.classList.add('is-active')
            })
        }

        if (windowWidth < 992) {
            tabContent.forEach(item => {
                item.classList.remove('is-active')
            })
            tabNav.forEach(item => {
                item.classList.remove('is-active')
            })
            document.querySelector('.our-history-tabs-item').classList.add('is-active')
            document.querySelector('.our-history-tab-content').classList.add('is-active')
        }
    }
    window.addEventListener('resize', tabsActivate)
})();