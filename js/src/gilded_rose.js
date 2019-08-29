function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

var items = [];

function decrease_sell_in(item) {
    item.sell_in -= 1;
}

function set_max_quality(quality) {
    return Math.min(quality, 50);
}

function set_min_quality(quality) {
    return Math.max(quality, 0);
}

function inversely_proportional_quality(item) {
    decrease_sell_in(item);
    switch (true) {
        case item.sell_in < 0:
            item.quality = 0;
            break;
        case item.sell_in < 6:
            item.quality = set_max_quality(item.quality + 3);
            break;
        case item.sell_in < 11:
            item.quality = set_max_quality(item.quality + 2);
            break;
        default:
            item.quality = set_max_quality(item.quality + 1);
    }
}

function decrease_quality(item, decreaseUnit) {
    if (item.sell_in < 0) {
        item.quality = set_min_quality(item.quality - decreaseUnit * 2);
    } else {
        item.quality = set_min_quality(item.quality - decreaseUnit);
    }
}

function directly_proportional_quality(item) {
    const decreaseUnit = item.name === 'Conjured Mana Cake' ? 2 : 1;
    decrease_sell_in(item);
    decrease_quality(item, decreaseUnit);
}

function update_quality2() {
    for (var i = 0; i < items.length; i++) {
        let item = items[i];
        switch (item.name) {
            case 'Sulfuras, Hand of Ragnaros':
                break;
            case 'Aged Brie':
            case 'Backstage passes to a TAFKAL80ETC concert':
                inversely_proportional_quality(item);
                break;
            default:
                directly_proportional_quality(item);
        }
    }
}
