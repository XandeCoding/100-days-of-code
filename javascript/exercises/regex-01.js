const archives = ['image.jpg', 'photo-1.jpeg',
    'photo-2.png', 'text.txt', 'pngphotojpeg'
];
const regex = new RegExp('\\b[.]jpg$\\b|\\b[.]jpeg$\\b|\\b[.]png$\\b');
let images = [];

archives.forEach((archive) => {
    const image = archive.match(regex);
    return image != null ?
        images.push(image['input']) : null;
});

console.log(images);