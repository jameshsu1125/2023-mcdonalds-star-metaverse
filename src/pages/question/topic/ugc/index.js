import Click from 'lesca-click';
import useTween, { Bezier } from 'lesca-use-tween';
import { forwardRef, memo, useContext, useEffect, useId, useImperativeHandle, useRef } from 'react';
import { Context } from '../../../../settings/config';
import { ACTION, PAGE } from '../../../../settings/constant';
import { QuestionContext, QuestionDirect, QuestionSteps } from '../../config';
import './index.less';
import { findID } from './useSort';

const Button = ({ steps, setState, input }) => {
	const [, setContext] = useContext(Context);

	const id = useId();
	const [style, setStyle] = useTween({ scale: 0 });
	useEffect(() => {
		if (steps === QuestionSteps.fadeIn || steps === QuestionSteps.questionIn) {
			setStyle(
				{ scale: 1 },
				{
					duration: 500,
					delay: 300,
					easing: Bezier.easeOutBack,
					onComplete: () => {
						Click.add(`#${id}`, () => {
							Click.remove(`#${id}`);
							const { target } = input.current;
							const { value: userName } = target;
							setState((S) => {
								setContext({
									type: ACTION.result,
									state: {
										userName,
										id: findID(S.answers),
										mottoIndex: Math.floor(Math.random() * 4),
									},
								});
								return { ...S, userName };
							});
							setContext({ type: ACTION.page, state: PAGE.result });
						});
					},
				},
			);
		} else if (steps === QuestionSteps.questionOut) {
			setStyle(
				{ scale: 0 },
				{
					duration: 500,
					easing: Bezier.easeInBack,
					onComplete: () => {
						setState((S) => ({
							...S,
							index: S.direct === QuestionDirect.next ? S.index + 1 : S.index - 1,
							steps: QuestionSteps.questionIn,
						}));
					},
				},
			);
		}
	}, [steps]);
	return (
		<div id={id} style={style} className='button'>
			<div />
		</div>
	);
};

const Input = forwardRef(({ steps }, ref) => {
	const inputRef = useRef();
	const [style, setStyle] = useTween({ opacity: 0, y: 200 });
	useEffect(() => {
		if (steps === QuestionSteps.fadeIn || steps === QuestionSteps.questionIn) {
			setStyle({ opacity: 1, y: 0 }, { duration: 700 });
		} else if (steps === QuestionSteps.questionOut) {
			setStyle(
				{ opacity: 0, y: 50 },
				{
					delay: 200,
					duration: 300,
					easing: Bezier.easeInOutQuart,
				},
			);
		}
	}, [steps]);

	useImperativeHandle(ref, () => ({
		target: inputRef.current,
	}));

	return (
		<div style={style} className='input'>
			<input ref={inputRef} placeholder='請輸入1-10個字暱稱' type='text' maxLength={10} />
		</div>
	);
});

const UGC = memo(() => {
	const InputRef = useRef();
	const [state, setState] = useContext(QuestionContext);
	const { steps } = state;
	return (
		<div className='UGC'>
			<Input ref={InputRef} steps={steps} />
			<Button input={InputRef} steps={steps} setState={setState} />
		</div>
	);
});
export default UGC;
