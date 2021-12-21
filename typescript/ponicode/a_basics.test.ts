import * as a_basics from "../a_basics"
// @ponicode
describe("a_basics.calculateCommissionTs", () => {
    test("0", () => {
        let result: any = a_basics.calculateCommissionTs(50000.0)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = a_basics.calculateCommissionTs(5000.0)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = a_basics.calculateCommissionTs(200001.0)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = a_basics.calculateCommissionTs(200000.0)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = a_basics.calculateCommissionTs(150000.0)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = a_basics.calculateCommissionTs(-Infinity)
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("a_basics.getClientAgeGenerationTs", () => {
    test("0", () => {
        let result: any = a_basics.getClientAgeGenerationTs({ age: 18 })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = a_basics.getClientAgeGenerationTs({ age: 35 })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = a_basics.getClientAgeGenerationTs({ age: 34 })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = a_basics.getClientAgeGenerationTs({ age: 18.0 })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = a_basics.getClientAgeGenerationTs({ age: 34.0 })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = a_basics.getClientAgeGenerationTs({ age: Infinity })
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("a_basics.isEmailValidTs", () => {
    test("0", () => {
        let result: any = a_basics.isEmailValidTs("user@host:300")
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result: any = a_basics.isEmailValidTs("bed-free@tutanota.de")
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result: any = a_basics.isEmailValidTs("something@example.com")
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result: any = a_basics.isEmailValidTs("user1+user2@mycompany.com")
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result: any = a_basics.isEmailValidTs("email@Google.com")
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = a_basics.isEmailValidTs("")
        expect(result).toMatchSnapshot()
    })
})

// @ponicode
describe("a_basics.getClientScoreTs", () => {
    test("0", () => {
        let object: any = [{ order_id: "-1", currency: "EUR", date: "01-01-2030", volume: 0 }, { order_id: "-1", currency: "EUR", date: "01-13-2020", volume: -1 }, { order_id: "-1", currency: "EUR", date: "01-13-2020", volume: -1 }, { order_id: "-1", currency: "EUR", date: "01-13-2020", volume: -100 }]
        let result: any = a_basics.getClientScoreTs({ name: { firstname: "Michael", lastname: "Murray-Kynynmound" }, orders: object })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let object: any = [{ order_id: "-1", currency: "EUR", date: "01-13-2020", volume: 100 }]
        let result: any = a_basics.getClientScoreTs({ name: { firstname: "Michael", lastname: "Murray-Kynynmound" }, orders: object })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let object: any = [{ order_id: "-1", currency: "EUR", date: "01-01-2020", volume: 1 }, { order_id: "-1", currency: "EUR", date: "01-01-2020", volume: 1 }]
        let result: any = a_basics.getClientScoreTs({ name: { firstname: "Pierre Edouard", lastname: "Baziz" }, orders: object })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let object: any = [{ order_id: "-1", currency: "EUR", date: "01-13-2020", volume: 1 }]
        let result: any = a_basics.getClientScoreTs({ name: { firstname: "Jean-Philippe", lastname: "Dupont" }, orders: object })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let object: any = [{ order_id: "-1", currency: "EUR", date: "01-01-2030", volume: -100 }, { order_id: "-1", currency: "EUR", date: "01-13-2020", volume: -100 }, { order_id: "-1", currency: "EUR", date: "01-13-2020", volume: 0 }]
        let result: any = a_basics.getClientScoreTs({ name: { firstname: "George", lastname: "Baziz" }, orders: object })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result: any = a_basics.getClientScoreTs({ name: { firstname: "", lastname: "" }, orders: [] })
        expect(result).toMatchSnapshot()
    })
})
