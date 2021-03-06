import './switch.scss';
import controller from './SwitchController';
import template from './SwitchView.html';

export const SwitchComponent = {
    template,
    controller,
    controllerAs: '$ctrl',
    transclude: true,
    require: {
        ngModel: '?ngModel',
    },
    bindings: {
        ngChecked: '=?',
        ngTrueValue: '=?',
        ngFalseValue: '=?',
        ngPermission: '@',
        onToggle: '&?'
    }
};
