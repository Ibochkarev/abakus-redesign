const $firstblockButton = document.querySelector('.firstblock__button');
const $firstblockMiddle = document.querySelector('.firstblock__middle');
const $arrowLeftWrap = document.querySelector('.arrow-left-wrap');
const $firstblockMiddleClose = document.querySelector('.firstblock__middle--close');

const $firstblockItemArray = [$firstblockButton, $firstblockMiddle];

if ($firstblockItemArray.length) {
    let elemsTopArray = [];

    let $firstblockMiddleFlug = true;

    $firstblockItemArray.forEach((elem) => {
        let elemTop = window.pageYOffset + elem.getBoundingClientRect().top;
        elemsTopArray.push(elemTop);
    })

    addFixedElemOnWindow (elemsTopArray[0], $firstblockButton);

    if($firstblockMiddleFlug) addFixedElemOnWindow (elemsTopArray[1], $firstblockMiddle);

    window.addEventListener('scroll', function () {
        addFixedElemOnWindow (elemsTopArray[0], $firstblockButton);
        if($firstblockMiddleFlug) addFixedElemOnWindow (elemsTopArray[1], $firstblockMiddle);
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

    $firstblockMiddleClose.addEventListener('click', () => {
        $firstblockMiddle.classList.remove('elem-fixed');
        $firstblockMiddleFlug = false;
    })

}
