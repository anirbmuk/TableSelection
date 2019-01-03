define(function() {
    
    getSelectionData = (event, data) => {
        let allPromises = [];
        if (event && event.type === 'selectionChanged') {
            const selectedRowsFromEvent = event.detail.value;
            if(selectedRowsFromEvent) {
                if (selectedRowsFromEvent.length === 0) {
                    return allPromises;
                }

                selectedRowsFromEvent.forEach(currentRow => {
                    const startIndex = currentRow['startIndex']['row'];
                    const endIndex = currentRow['endIndex']['row'];
                    for (var i=startIndex; i<= endIndex; i++) {
                        const promise = data.at(i);
                        allPromises.push(promise);
                    }
                });
            }
        }
        return allPromises;
    };
    
    return {
        getSelectionData
    };
    
});