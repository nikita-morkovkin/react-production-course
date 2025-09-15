import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { increment, decrement } from '../model/slice/counterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);

    const { t } = useTranslation();

    return (
        <div>
            <h1 data-testid="value-title">
                {value}
            </h1>

            <button
                data-testid="increment-btn"
                onClick={() => dispatch(increment())}
                type="button"
            >
                {t('increment')}
            </button>

            <button
                data-testid="decrement-btn"
                onClick={() => dispatch(decrement())}
                type="button"
            >
                {t('decrement')}
            </button>
        </div>
    );
};
