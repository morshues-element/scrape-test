() => {
    const ts = Date.now()
    const srcData = JSON.parse(document.body.innerText);
    var items = srcData['results'].map((item, index) => {
        const creator = item['model_creators']['name'];
        const model_name = item['name'];
        const ranking = index+1;
        const arena_elo = item['quality_elo'];
        const arena_win_rate = item['arena_selection_rate'];
        const selections = item['arena_selections'];
        const update_time = ts;
        return {creator, model_name, ranking, arena_elo, arena_win_rate, selections, update_time}
    });
    if (!items.length) {
        throw 'No items found';
    }
    return {
        'timestamp': ts,
        'data': items,
    };
}