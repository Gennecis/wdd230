// In your js file, declare three const variables that hold references to the 
// input, button, and .list elements.

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
// check to make sure the input is not blank before doing the following 
// remaining tasks in this list using an if block, otherwise provide a message or at least do nothing and return the .focus() to the input field.

button.addEventListener('click', () => {
    if (input.value != '')
        {
            dispalyList(input.value);
            chaptersArray.push(input.value);
            setChapterList();
            input.value = '';
            input.focus
        }
    });



chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    dispalyList(chapter)
});   


function dispalyList(item)
{
    const listItem = document.createElement('li');
    const delButton = document.createElement('button');
    listItem.innerHTML = input.value;
    delButton.innerHTML = '❌';
    listItem.appendChild(delButton);
    list.appendChild(listItem);
    delButton.addEventListener('click', () => list.removeChild(listItem));
    input.focus;
    input.value = '';
};

function setChapterList(){
    localStorage.setItem('bomList', JSON.stringify(chaptersArray))
};

function getChapterList(){
    return JSON.parse(localStorage.getItem('bomList'))
};


function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}