const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
    active: false,
    visible: false,
    key: 'Game',
};

export class SampleScene extends Phaser.Scene {
    constructor() {
        super(sceneConfig);
    }

    public preload () {
        this.load.setBaseURL('https://labs.phaser.io');

        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
    }

    public create() {
        const particles = this.add.particles(0, 0, 'red', {
            speed: 150,
            scale: { start: 0.5, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(500, 500);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        particles.startFollow(logo);
    }
}
