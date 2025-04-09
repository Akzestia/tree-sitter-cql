import XCTest
import SwiftTreeSitter
import TreeSitterCql

final class TreeSitterCqlTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_cql())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading Cql grammar")
    }
}
