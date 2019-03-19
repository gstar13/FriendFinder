//template of friend data
var friendsData = [
    {
name: "Jim Wilbur",
photo: "https://www.google.com/search?q=bear+images&tbm=isch&source=iu&ictx=1&fir=aOYYcJud_1wVVM%253A%252CNNNPcHGxjgyFHM%252C_&vet=1&usg=AI4_-kSCAQylMxLL34pm2Rnu-IA1TtXK2Q&sa=X&ved=2ahUKEwjGv_6hko3hAhUrIjQIHaPZDcMQ9QEwCXoECAcQFg#imgrc=aOYYcJud_1wVVM:",
scores: [1,5,2,3,4,4,4,2,1,5]
},
    {
        name: "Jack Tripper",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe1%2F6d%2F49%2Fe16d49e90bc3d63d75943e1e3dbe4fff.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com.au%2Fpin%2F565272190719860591%2F&docid=Ujxr9xANyxLj1M&tbnid=Z6xNF-aSC_zG1M%3A&vet=10ahUKEwiY5euulI3hAhWkJjQIHUYuB2kQMwhmKAYwBg..i&w=492&h=720&bih=650&biw=1037&q=jack%20tripper&ved=0ahUKEwiY5euulI3hAhWkJjQIHUYuB2kQMwhmKAYwBg&iact=mrc&uact=8",
        scores: [5,3,1,1,3,2,4,3,1,2]
    },
    {
        name: "Phil Donahue",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1235082607%2Fphil-donahue_400x400.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fphil_donahue&docid=CJe1KVPzW6u05M&tbnid=ApjyPtaVzxLoIM%3A&vet=10ahUKEwiYxuy8lI3hAhVdHzQIHX5ABL0QMwhtKAIwAg..i&w=400&h=400&bih=650&biw=1037&q=phil%20donahue&ved=0ahUKEwiYxuy8lI3hAhVdHzQIHX5ABL0QMwhtKAIwAg&iact=mrc&uact=8",
        scores: [4,4,2,1,5,1,5,2,3,4]
    },
    {
        name: "Tony Danza",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Ff%2Ff9%2FTony_Danza.jpg%2F220px-Tony_Danza.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTony_Danza&docid=bg5jJf93Bpz1wM&tbnid=MILvpM1coKOz2M%3A&vet=10ahUKEwj67ar5lI3hAhWUrZ4KHW3lD-gQMwhpKAAwAA..i&w=220&h=348&bih=650&biw=1037&q=tony%20danza&ved=0ahUKEwj67ar5lI3hAhWUrZ4KHW3lD-gQMwhpKAAwAA&iact=mrc&uact=8",
        scores: [2,3,4,4,4,2,1,1,5,5]
    },
    {
        name: "Jimi Q Hendrix",
        photo: "https://www.facebook.com/photo.php?fbid=622889412784&set=t.100000164733605&type=3&size=720%2C540",
        scores: [1,5,4,2,1,5,2,3,4,4]
    },
    {
        name: "Lucy in the Sky with Diamonds",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.newyorker.com%2Fphotos%2F59095b486552fa0be682d903%2Fmaster%2Fw_727%2Cc_limit%2FBrody-Lucy.jpg&imgrefurl=https%3A%2F%2Fwww.newyorker.com%2Fculture%2Frichard-brody%2Fluc-bessons-surprisingly-metaphysical-lucy&docid=TNL2lAoP8zdCfM&tbnid=PAk8Ta8NU4L9yM%3A&vet=10ahUKEwj6lvmNlo3hAhXaIzQIHeccAGkQMwhvKAQwBA..i&w=727&h=362&bih=650&biw=1037&q=lucy%20&ved=0ahUKEwj6lvmNlo3hAhXaIzQIHeccAGkQMwhvKAQwBA&iact=mrc&uact=8",
        scores: [1,2,2,2,3,4,3,2,1,5]
    },
    {
        name: "Jane Ryan",
        photo:"https://www.google.com/imgres?imgurl=http%3A%2F%2Fcoolspotters.com%2Ffiles%2Fphotos%2F181642%2Fjane-ryan-profile.jpg&imgrefurl=http%3A%2F%2Fcoolspotters.com%2Fcharacters%2Fjane-ryan&docid=vb6B2oWAmJ0geM&tbnid=5wOY4gBIAiF8iM%3A&vet=10ahUKEwjRzvGblo3hAhXDIDQIHZxTBgsQMwhAKAAwAA..i&w=300&h=225&bih=650&biw=1037&q=jane%20ryan&ved=0ahUKEwjRzvGblo3hAhXDIDQIHZxTBgsQMwhAKAAwAA&iact=mrc&uact=8" ,
        scores: [3,4,4,4,2,1,5,1,5,2]
    },
    {
        name: "Kate Hudson",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F8%2F8c%2FKate_Hudson_2006_cropped.jpg%2F170px-Kate_Hudson_2006_cropped.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FKate_Hudson&docid=tpeLmb-sFcSWZM&tbnid=lye-bxhmvDiMFM%3A&vet=10ahUKEwja-YGslo3hAhX2IjQIHXegApoQMwhuKAMwAw..i&w=170&h=214&bih=650&biw=1037&q=kate%20hudson&ved=0ahUKEwja-YGslo3hAhX2IjQIHXegApoQMwhuKAMwAw&iact=mrc&uact=8",
        scores: [1,1,1,1,1,1,1,1,1,1]
    },
    {
        name: "Janet Jackson",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fichef.bbci.co.uk%2Fimages%2Fic%2F960x540%2Fp03kc2m4.jpg&imgrefurl=https%3A%2F%2Fwww.bbc.co.uk%2Fmusic%2Fartists%2F6be2828f-6c0d-4059-99d4-fa18acf1a296&docid=VLoe87A2xnM9DM&tbnid=_MhyEj7S4JlRkM%3A&vet=10ahUKEwjHu_e4lo3hAhXSLH0KHYnNBEUQMwhvKAIwAg..i&w=960&h=540&bih=650&biw=1037&q=janet%20jackson&ved=0ahUKEwjHu_e4lo3hAhXSLH0KHYnNBEUQMwhvKAIwAg&iact=mrc&uact=8",
        scores: [5,5,5,5,5,5,5,5,5,5]
    },
    {
        name: "Jonathan Van Ness",
        photo: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.irishexaminer.com%2Fremote%2Fmedia.central.ie%2Fmedia%2Fimages%2Fj%2FJonathanVanNessHeadshot_large.jpg%3Fwidth%3D648%26s%3Die-909369&imgrefurl=https%3A%2F%2Fwww.irishexaminer.com%2Fbreakingnews%2Fentertainment%2Fqueer-eyes-jonathan-van-ness-announces-dublin-stand-up-gig-909369.html&docid=rqQfnuU8ktvH3M&tbnid=TlriJefKJRVvoM%3A&vet=10ahUKEwiPpajFlo3hAhVDLX0KHWMNAnYQMwhqKAIwAg..i&w=600&h=338&bih=650&biw=1037&q=jonathan%20van%20ness&ved=0ahUKEwiPpajFlo3hAhVDLX0KHWMNAnYQMwhqKAIwAg&iact=mrc&uact=8",
        scores: [2,3,4,2,3,2,3,5,3,2]
    }
];
//export this to the api route
module.exports = friendsData;