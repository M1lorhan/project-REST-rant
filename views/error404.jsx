const React = require('react')
const Def = require('./default')

function error404 () {
    return(
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p className="text-center">Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/the-lucky-neko-rplhB9mYF48-unsplash.jpg" alt="Three Cute Kittens"/>
                    <div className="text-center">
                    Photo by <a href="AUTHOR_LINK">Tuqa Nabi</a> <a href="UNSPLASH_LINK"></a>on Unsplash 
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404