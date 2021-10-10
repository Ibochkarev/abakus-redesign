const $firstblockButton = document.querySelector('.firstblock__button');
const $arrowLeftWrap = document.querySelector('.arrow-left-wrap');

if ($firstblockButton) {
    let elemTop = window.pageYOffset + $firstblockButton.getBoundingClientRect().top;
    addFixedElemOnWindow (elemTop, $firstblockButton);

    window.addEventListener('scroll', function () {
        addFixedElemOnWindow (elemTop, $firstblockButton);
    });

    function addFixedElemOnWindow (positionElem, elem) {
        let positionWindow = window.pageYOffset;

        if (positionElem <= positionWindow) {
            elem.classList.add('elem-fixed');
            $arrowLeftWrap.classList.add('hide-elem');
        } else {
            elem.classList.remove('elem-fixed');
            $arrowLeftWrap.classList.remove('hide-elem');
        }
    }
}
