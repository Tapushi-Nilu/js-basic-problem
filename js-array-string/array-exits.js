function megaFriends(friends) {
    if (Array.isArray(friends) == false){
        return 'Please provide an array of strings'
    }
   let mega = friends[0];
   for (const friend of friends){
       if (friend.length > mega.length) {
           mega = friend;
       }
   }
   return mega;
}
const friends = ['kutub', 'lion', 'shamol', 'sabbir'];
const myBigBuddy = megaFriends(friends);
//console.log(myBigBuddy);
if (friends.indexOf('lion') != -1) {
    console.log('lion exits');
}

if (friends.includes('lion') != -1) {
    console.log('lion exits');
}
