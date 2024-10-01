const URL = 'http://zero.webappsecurity.com'
const SEARCH_FORM = '#searchTerm';
const RESULT = '.top_offset'

class searchTest {
    static visit() {
        cy.visit(URL)
    }

    static search(keyword) {
        cy.get(SEARCH_FORM).type(keyword + '{enter}')
    }

    static showResult(keyword) {
        cy.get(RESULT).should('contain.text',keyword)
    }

}

export default searchTest