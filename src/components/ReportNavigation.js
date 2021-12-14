import {FormControl, FormControlLabel, FormLabel, RadioGroup} from "@mui/material"
const optionsListStorage = [
    {value: '1', label: 'Один день'},
    {value: '2', label: 'Два дня'},
    {value: '5', label: 'Пять дней'}
]
export default function ReportNavigation() {
    return (
        <div>
            ReportNavigation
            <FormControl component="fieldset" className={classes.textField}>
                <FormLabel
                    className={classes.radioGroupLabel}
                    component="legend">
                    Результат&nbsp;хранить
                </FormLabel>
                <RadioGroup
                    value={form.lifetimeLimit}
                    aria-label="durationStorage"
                    row
                    name="durationStorage"
                    onChange={(event, newValue) => {
                        onChangeFormConfigure({lifetimeLimit: newValue})
                    }}>
                    {optionsListStorage.map((option, idx) => (
                        <FormControlLabel
                            className={classes.radioLabel}
                            key={idx}
                            value={option.value}
                            // control={<StyledRadio/>}
                            label={option.label}/>
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    )
}
