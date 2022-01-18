import {
    SideBarContainer,
    FilterContainer,
    checkboxStyles,
    formStyle,
    buttonStyles
} from './styles/FilterComponent-styles';

const FilterSideBar = ({ selected, changeSelected, onClick }) => {

    return (
        <SideBarContainer>
            <FilterContainer>
                <div style={checkboxStyles}>
                    <form style={formStyle}>
                        <div>
                            <label for='1' >A-Z</label>
                            <input type='radio' value='1' id='1' checked={ selected === '1' ? true : false } onChange={changeSelected}/>
                        </div>
                        <div>
                            <label for='2' >Z-A</label>
                            <input type='radio' value='2' id='2' checked={ selected === '2' ? true : false } onChange={changeSelected}/>
                        </div>
                        <br></br>
                        <div>
                            <label for='3' >Year &#8593;</label>
                            <input type='radio' value='3' id='3' checked={ selected === '3' ? true : false } onChange={changeSelected}/>
                        </div>
                        <div>
                            <label for='4' >Year &#8595;</label>
                            <input type='radio' value='4' id='4' checked={ selected === '4' ? true : false } onChange={changeSelected}/>
                        </div>
                
                    </form>
                    <button style={buttonStyles} onClick={onClick}>Apply</button>
                </div>
            </FilterContainer>
        </SideBarContainer>
    )
};
export default FilterSideBar;