huggeoApp.service('databaseService', function () {

    var example1 = {
        name: 'Diego Benavides',
        profilePictureURL: 'https://s3.amazonaws.com/37assets/svn/1065-IMG_2529.jpg',
        lastMessageText: 'Ya simon',
        lastMessageDate: 'Ayer'
    }

    var example2 = {
        name: 'Mariana Arreola',
        profilePictureURL: 'https://s-media-cache-ak0.pinimg.com/736x/47/6c/98/476c989acbaf62850ff67146d0d23b6c--profile-pics-in-love.jpg',
        lastMessageText: 'No problem',
        lastMessageDate: 'Sábado'
    }

    var example3 = {
        name: 'Fabritzio Villegas',
        profilePictureURL: 'https://static1.squarespace.com/static/50de3e1fe4b0a05702aa9cda/t/50eb2245e4b0404f3771bbcb/1357589992287/ss_profile.jpg',
        lastMessageText: 'Es broma dude',
        lastMessageDate: 'Sábado'
    }

    var example4 = {
        name: 'Natividad Torres',
        profilePictureURL: 'https://i.pinimg.com/736x/40/32/e0/4032e0031e2e95989f1e76fe3d4f57b7--face-profile-women-profile-face.jpg',
        lastMessageText: ':)',
        lastMessageDate: 'Sábado'
    }

    this.users = []
    this.users.push(example1);
    this.users.push(example2);
    this.users.push(example1);
    this.users.push(example2);
    this.users.push(example1);
    this.users.push(example2);
    this.users.push(example3);
    this.users.push(example4);
    this.users.push(example2);
    this.users.push(example3);
    this.users.push(example4);
    this.users.push(example2);
    this.users.push(example3);
    this.users.push(example4);

    this.users.sort(function () {
        return .5 - Math.random();
    });


});