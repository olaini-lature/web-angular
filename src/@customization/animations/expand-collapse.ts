import { animate, state, style, transition, trigger } from '@angular/animations';
import { CustomizationAnimationCurves, CustomizationAnimationDurations } from '@customization/animations/defaults';

// -----------------------------------------------------------------------------------------------------
// @ Expand / collapse
// -----------------------------------------------------------------------------------------------------
const expandCollapse = trigger('expandCollapse',
    [
        state('void, collapsed',
            style({
                height: '0'
            })
        ),

        state('*, expanded',
            style('*')
        ),

        // Prevent the transition if the state is false
        transition('void <=> false, collapsed <=> false, expanded <=> false', []),

        // Transition
        transition('void <=> *, collapsed <=> expanded',
            animate('{{timings}}'),
            {
                params: {
                    timings: `${CustomizationAnimationDurations.entering} ${CustomizationAnimationCurves.deceleration}`
                }
            }
        )
    ]
);

export { expandCollapse };
