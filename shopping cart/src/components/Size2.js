import React from "react";

export default class Sizes2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: '4'
        };

        this.updateLanguage = this.updateLanguage.bind(this);
    }
    updateLanguage(lang) {
        this.setState(function () {
            return {
                selectedLanguage: lang
            }
        });
    }

    render() {
        var languages = ['1', '2', '3', '4'];
        return (
            <ul id="sizes2">
                {languages.map(function (lang) {
                    return <li
                        style={lang === this.state.selectedLanguage ? { opacity: '1' } : null}
                        onClick={this.updateLanguage.bind(null, lang)}
                    ></li>
                }, this)}
            </ul>
        )
    }
}


