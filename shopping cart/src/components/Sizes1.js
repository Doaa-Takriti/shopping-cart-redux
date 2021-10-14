import React from "react";

export default class Sizes1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'lg'
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
        var languages = ['sm', 'lg', 'x-lg', 'xx-lg'];
        return (
            <ul id="sizes1">
                {languages.map(function (lang) {
                    return <li
                        style={lang === this.state.selectedLanguage ? { color: 'grey', backgroundColor: 'white', border: '1px solid grey' } : null}
                        onClick={this.updateLanguage.bind(null, lang)}
                    >{lang}</li>
                }, this)}
            </ul>
        )
    }
}


