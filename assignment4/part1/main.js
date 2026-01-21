console.log("part1");

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'
;



let insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
];

let insertY=['the soup kitchen',
'Disneyland',
'the White House'
];
let insertZ =[
    'spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away'

];



function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


randomize.addEventListener('click', result);

function result() {
    //1
    let newStory = storyText;
    //2
    
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY); 
    let zItem = randomValueFromArray(insertZ); 
    //3 
    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);
  if(customName.value !== '') {


    const name = customName.value;
    //4
    newStory.replaceAll('Bob',name);

  }

  if(document.getElementById("uk").checked) {
    //5
    const weight = Math.round(300/14)+' stone';
    const temperature =  Math.round((94-32)*5/9)+' centigrade';
    newStory = newStory.replaceAll('94 fahrenheit',temperature);
    newStory = newStory.replaceAll('300 pounds',weight);
  }
  //6
  story.textContent = newStory;
  story.style.visibility = 'visible';
}