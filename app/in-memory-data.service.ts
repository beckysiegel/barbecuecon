export class InMemoryDataService {
    createDb() {
        let events = [{
            id: 1,
            date: '8/24/2016, 10:00:00 AM',
            name: 'How to become stripper fairies',
            image: '../images/fairy.jpg',
            text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis, risus at convallis pellentesque, ipsum est auctor massa, ac malesuada enim magna quis dolor. Ut nisl velit, tempus vitae ex non, vehicula rutrum dui. Phasellus viverra hendrerit finibus. Etiam ante lacus, eleifend sed felis sed, finibus blandit felis. Nullam molestie turpis nec tempor interdum. Donec fringilla nisi ut scelerisque auctor. Cras non nunc ut dolor finibus gravida at eget ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam in quam est. Nam aliquet vitae enim id efficitur. Etiam ornare velit enim, sed accumsan diam placerat a. Duis tincidunt neque vel ornare efficitur.</p><p>Morbi accumsan tincidunt velit, non lobortis lorem. Fusce sodales orci at feugiat elementum. Vivamus posuere iaculis nunc sit amet vehicula. Duis in lacinia dolor. Proin semper tristique diam, eget congue eros malesuada vitae. Sed mollis quam ut sem vulputate, ac convallis eros vehicula. Phasellus et lectus ac eros vehicula blandit. Proin ac lobortis diam. Duis leo erat, ornare eu auctor vel, tristique at ex. Fusce et leo mollis, fermentum nisi non, vehicula lectus. Sed nunc leo, vulputate nec enim molestie, sollicitudin aliquet augue. Duis vel nisi felis. Nunc quis felis eu libero venenatis mattis. Cras libero urna, bibendum vitae elementum id, faucibus et metus. Nunc venenatis arcu in consectetur dignissim. In hac habitasse platea dictumst.</p>'
        }, {
            id: 2,
            date: '8/24/2016, 12:00:00 PM',
            name: 'How to get thrown out of a wine tour train',
            image: '',
            text: ''
        }, {
            id: 3,
            date: '8/24/2016, 02:00:00 PM',
            name: 'Passing out on the steps 101',
            image: '',
            text: ''
        }, {
            id: 4,
            date: '8/24/2016, 04:00:00 PM',
            name: 'Rooting while hungover',
            image: ''
        }, {
            id: 5,
            date: '8/25/2016, 10:00:00 AM',
            name: 'Naked crack addict and bootloader unlocks',
            image: '',
            text: ''
        }, {
            id: 6,
            date: '8/25/2016, 12:00:00 PM',
            name: 'RubberMan',
            image: '',
            text: ''
        }, {
            id: 7,
            date: '8/25/2016, 02:00:00 PM',
            name: 'Fuzzing with bees.',
            image: '',
            text: ''
        }, ];
        return {events};
    }
}
