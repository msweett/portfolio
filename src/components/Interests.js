import React from 'react'
import NavBar from './NavBar'
import Content from './Content'


class App extends React.Component {

    render() {
        const interests = "I enjoy most things!"

        return (
            <div className="matthew-sweett-porfolio">
                <NavBar />
                <div class="main-content">
                    <Content title="Interests" content={interests} />
                </div>
                <div class="footer"></div>
            </div>
        )
    }
}

export default App