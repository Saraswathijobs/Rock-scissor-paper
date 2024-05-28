document.addEventListener('DOMContentLoaded', () => {
    const userChoiceDisplay = document.getElementById('userChoice');
    const computerChoiceDisplay = document.getElementById('computerChoice');
    const resultDisplay = document.getElementById('result');
    const possibleChoices = document.querySelectorAll('button');
    let userChoice;
    let computerChoice;
    let result;


if(userChoice==computerChoice){
    return 'Its draw';
}elseif{
    (userChoice==='rock'&& computerChoice==='scissor')||
    (userChoice==='paper'&& computerChoice=='scissor')||
    (userChoice=== 'rock' && computerChoice==='paper')
    return 'You win';
}
else{
    return 'You lose';
}
});
