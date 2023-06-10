/* eslint-disable react/jsx-no-target-blank */
import Click from 'lesca-click';
import { memo, useEffect, useId } from 'react';
import { 網站使用條款URL, 隱私權保護聲明URL } from '../../../settings/config';
import './index.less';

const Footer = memo(() => {
	const termsID = useId();
	const privacyID = useId();

	useEffect(() => {
		Click.add(`#${termsID}`, () => {
			window.open(網站使用條款URL);
		});
		Click.add(`#${privacyID}`, () => {
			window.open(隱私權保護聲明URL);
		});
	}, []);
	return (
		<div className='Footer'>
			<div>
				<a id={termsID} target='_blank' href={網站使用條款URL}>
					網站使用條款
				</a>
			</div>
			<div>
				<a id={privacyID} target='_blank' href={隱私權保護聲明URL}>
					隱私權保護聲明
				</a>
			</div>
		</div>
	);
});
export default Footer;
