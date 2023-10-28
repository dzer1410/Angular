import { of } from "rxjs";
import { Hero } from "../hero";
import { HeroesComponent } from "./heroes.component"

describe('Heroes component', () => {

    let component: HeroesComponent;
    let HEROES;
    let mockHeroService;

    beforeEach(() => {
        HEROES = [
            { id: 1, name: 'SpiderDude', strength: 8},
            { id: 2, name: 'Wonderful woman', strength: 24},
            { id: 3, name: 'SuperDud', strength: 55},
        ]

        mockHeroService = jasmine.createSpyObj(['getHeroes','addHero','deleteHero'])

        component = new HeroesComponent(mockHeroService);
    })

    describe('delete', () => {
        it('should remove the indicated hero from the heroes list', () => {
            mockHeroService.deleteHero.and.returnValue(of(true));
            component.heroes = HEROES;

            component.delete(HEROES[2]);

            expect(component.heroes.length).toBe(2);
        })
    })

})