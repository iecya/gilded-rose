function Item(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality = quality;
}

var items = [];

function update_quality() {
    for (var i = 0; i < items.length; i++) {
        if (
            items[i].name != 'Aged Brie' &&
            items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
        ) {
            if (items[i].quality > 0) {
                if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
                    items[i].quality = items[i].quality - 1;
                }
            }
        } else {
            if (items[i].quality < 50) {
                items[i].quality = items[i].quality + 1;
                if (
                    items[i].name == 'Backstage passes to a TAFKAL80ETC concert'
                ) {
                    if (items[i].sell_in < 11) {
                        if (items[i].quality < 50) {
                            items[i].quality = items[i].quality + 1;
                        }
                    }
                    if (items[i].sell_in < 6) {
                        if (items[i].quality < 50) {
                            items[i].quality = items[i].quality + 1;
                        }
                    }
                }
            }
        }
        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
            items[i].sell_in = items[i].sell_in - 1;
        }
        if (items[i].sell_in < 0) {
            if (items[i].name != 'Aged Brie') {
                if (
                    items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
                ) {
                    if (items[i].quality > 0) {
                        if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
                            items[i].quality = items[i].quality - 1;
                        }
                    }
                } else {
                    items[i].quality = items[i].quality - items[i].quality;
                }
            } else {
                if (items[i].quality < 50) {
                    items[i].quality = items[i].quality + 1;
                }
            }
        }
    }
}

function decrease_sell_in(item) {
    item.sell_in -= 1;
}

function setMaxQuality(quality) {
    return Math.min(quality, 50);
}

function inverselyProportionalQuality(item) {
    decrease_sell_in(item);
    switch (true) {
        case item.sell_in < 6:
            item.quality = setMaxQuality(item.quality + 3);
            break;
        case item.sell_in < 11:
            item.quality = setMaxQuality(item.quality + 2);
            break;
        default:
            item.quality = setMaxQuality(item.quality + 1);
    }
}

function decreaseQuality(item) {
    if (item.sell_in < 0) {
        item.quality -= 2;
    } else {
        item.quality -= 1;
    }
}

function directlyProportionalQuality(item) {
    decrease_sell_in(item);
    decreaseQuality(item);
}

function update_quality2() {
    for (var i = 0; i < items.length; i++) {
        let item = items[i];
        switch (item.name) {
            case 'Sulfuras, Hand of Ragnaros':
                break;
            case 'Aged Brie':
            case 'Backstage passes to a TAFKAL80ETC concert':
                inverselyProportionalQuality(item);
                break;
            default:
                directlyProportionalQuality(item);
        }
    }
}
