import Click from 'lesca-click';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useCallback, useContext, useEffect, useId, useMemo, useRef } from 'react';
import { QuestionContext, QuestionDirect, QuestionList, QuestionSteps } from '../../config';
import './index.less';

const DELAY = 1700;

const Label = ({ label }) => <span>{label}</span>;
const Button = memo(({ label, type, index, gtm }) => {
	const [state, setState] = useContext(QuestionContext);
	const { steps } = state;

	const ref = useRef();
	const id = useId();
	const [style, setStyle] = useTween({ opacity: 0, y: 200 });

	const onClick = useCallback(() => {
		Click.add(`#${id}`, () => {
			Click.remove(`#${id}`);
			setState((S) => {
				const { answers, index: idx } = S;
				const cloneAnswer = [...answers];
				cloneAnswer[idx] = type;

				window.dataLayer?.push({
					event: 'click_btn',
					eventCategory: 'engagement',
					eventLabel: `${gtm}_${label}`,
				});

				return {
					...S,
					answers: cloneAnswer,
					steps: QuestionSteps.questionOut,
					direct: QuestionDirect.next,
				};
			});
		});
	}, [index]);

	useEffect(() => {
		if (steps === QuestionSteps.fadeIn) {
			setStyle(
				{ opacity: 1, y: 0 },
				{
					delay: DELAY + index * 100,
					duration: 700,
					easing: Bezier.easeInOutQuart,
					onComplete: onClick,
				},
			);
		} else if (steps === QuestionSteps.questionOut) {
			setStyle(
				{ opacity: 0, y: 200 },
				{
					delay: (2 - index) * 100,
					duration: 300,
					easing: Bezier.easeInOutQuart,
					onComplete: () => {
						if (index === 0) {
							setState((S) => ({
								...S,
								index: S.direct === QuestionDirect.next ? S.index + 1 : S.index - 1,
								steps: QuestionSteps.questionIn,
							}));
						}
					},
				},
			);
		} else if (steps === QuestionSteps.questionIn) {
			setStyle(
				{ opacity: 1, y: 0 },
				{
					delay: 300 + index * 100,
					duration: 700,
					easing: Bezier.easeInOutQuart,
					onComplete: onClick,
				},
			);
		}
	}, [steps]);

	return (
		<div ref={ref} id={id} style={style} className='button'>
			<div>
				<Label steps={steps} label={label} index={index} setState={setState} />
			</div>
		</div>
	);
});

const ButtonGroup = memo(() => {
	const [context] = useContext(QuestionContext);
	const { index } = context;
	const { answers } = useMemo(() => QuestionList[index], [index]);

	return (
		<div className='ButtonGroup'>
			{answers.map((item, i) => (
				<Button
					key={JSON.stringify(item)}
					label={item.text}
					type={item.type}
					index={i}
					gtm={item.gtm}
				/>
			))}
		</div>
	);
});
export default ButtonGroup;
