function setPlayerStyle(player){
    player.style.color = 'green';
    player.style.border = '1px solid red';
    player.style.borderRadius = '10px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}

const players = document.getElementsByClassName('player');
for(const player of players){
    setPlayerStyle(player);
    player.addEventListener('click', function(){
        player.style.backgroundColor = 'darkkhaki';
        player.style.color = 'white'; 
        player.style.fontSize = '30px';
    })
}
function addPlayer(){
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
        <h4 class="player-name">new player</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque odio eligendi harum laboriosam doloribus quos alias sapiente iusto. Odit cupiditate quaerat possimus quos provident, illo ad. Maiores, esse maxime! Accusantium?</p>
    
    `;
    playerContainer.appendChild(player);
    setPlayerStyle(player);
    player.addEventListener('click', function(){
        player.style.backgroundColor = 'darkkhaki';
        player.style.color = 'white'; 
        player.style.fontSize = '30px'; 
    })
}





