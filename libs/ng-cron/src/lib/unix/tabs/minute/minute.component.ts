import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Segment, Type, CoreService, CronUnixUIService } from '@sbzen/cron-core';

import { CronTabSingleSegmentComponent } from './../../../cron-tab-single-segment.abstract';

@Component({
	selector: 'unix-cron-minute',
	templateUrl: './minute.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnixCronMinuteComponent extends CronTabSingleSegmentComponent {
	readonly minuteCodes = CoreService.getList(Segment.minutes, true);
	readonly minutes = CoreService.getList(Segment.minutes);
	readonly api = this.cronUI.getApi<Type.MINUTES>(Type.MINUTES);

	constructor(
		readonly cronUI: CronUnixUIService,
		protected readonly cd: ChangeDetectorRef
	) {
		super(Type.MINUTES);
	}
}
