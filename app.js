(function() { 
    'use strict';

    const url = 'https://jsonplaceholder.typicode.com/albums';

    const fetchData = async (url) => { 
        try {
            const response = await fetch(url);
            const json = await response.json();
            return json;
            
        } catch (err) { 
            throw new Error('something wrong');
        }
    }

        fetchData(url)
            .then(data => console.table(data))
            .catch(err => console.error(err));
})();
