const app = document.getElementById('typewriter');
const typewriter = new Typewriter(app, {

    loop:true,
    delay:75,
});

typewriter .typeString('Miel natural 100% pura')

.pauseFor(200)
.start();
