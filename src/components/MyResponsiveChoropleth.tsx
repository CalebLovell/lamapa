// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/geo
import { ResponsiveChoropleth } from '@nivo/geo';
import laGeojson from 'data/laGeojson.json';

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const MyResponsiveChoropleth = () => (
	<ResponsiveChoropleth
		data={data}
		features={laGeojson.features}
		margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
		colors='nivo'
		domain={[0, 1000000]}
		unknownColor='#666666'
		label='properties.name'
		valueFormat='.2s'
		projectionScale={275}
		projectionTranslation={[1, 0.4]}
		projectionRotation={[0, 0, 0]}
		enableGraticule={true}
		graticuleLineColor='#dddddd'
		borderWidth={0.5}
		borderColor='#152538'
	/>
);

export default MyResponsiveChoropleth;

const data = [
	{
		id: `AFG`,
		value: 785673,
	},
	{
		id: `AGO`,
		value: 603066,
	},
	{
		id: `ALB`,
		value: 627697,
	},
	{
		id: `ARE`,
		value: 823831,
	},
	{
		id: `ARG`,
		value: 252010,
	},
	{
		id: `ARM`,
		value: 794066,
	},
	{
		id: `ATA`,
		value: 319282,
	},
	{
		id: `ATF`,
		value: 606871,
	},
	{
		id: `AUT`,
		value: 902865,
	},
	{
		id: `AZE`,
		value: 633789,
	},
	{
		id: `BDI`,
		value: 628433,
	},
	{
		id: `BEL`,
		value: 85181,
	},
	{
		id: `BEN`,
		value: 496997,
	},
	{
		id: `BFA`,
		value: 422288,
	},
	{
		id: `BGD`,
		value: 867379,
	},
	{
		id: `BGR`,
		value: 559809,
	},
	{
		id: `BHS`,
		value: 234793,
	},
	{
		id: `BIH`,
		value: 629394,
	},
	{
		id: `BLR`,
		value: 594135,
	},
	{
		id: `BLZ`,
		value: 857724,
	},
	{
		id: `BOL`,
		value: 480871,
	},
	{
		id: `BRN`,
		value: 582759,
	},
	{
		id: `BTN`,
		value: 137372,
	},
	{
		id: `BWA`,
		value: 295803,
	},
	{
		id: `CAF`,
		value: 333495,
	},
	{
		id: `CAN`,
		value: 975318,
	},
	{
		id: `CHE`,
		value: 422789,
	},
	{
		id: `CHL`,
		value: 947832,
	},
	{
		id: `CHN`,
		value: 866226,
	},
	{
		id: `CIV`,
		value: 370660,
	},
	{
		id: `CMR`,
		value: 16193,
	},
	{
		id: `COG`,
		value: 13090,
	},
	{
		id: `COL`,
		value: 77322,
	},
	{
		id: `CRI`,
		value: 930658,
	},
	{
		id: `CUB`,
		value: 465201,
	},
	{
		id: `-99`,
		value: 301098,
	},
	{
		id: `CYP`,
		value: 190179,
	},
	{
		id: `CZE`,
		value: 388426,
	},
	{
		id: `DEU`,
		value: 304321,
	},
	{
		id: `DJI`,
		value: 421142,
	},
	{
		id: `DNK`,
		value: 52297,
	},
	{
		id: `DOM`,
		value: 247332,
	},
	{
		id: `DZA`,
		value: 357156,
	},
	{
		id: `ECU`,
		value: 603936,
	},
	{
		id: `EGY`,
		value: 256742,
	},
	{
		id: `ERI`,
		value: 321193,
	},
	{
		id: `ESP`,
		value: 53278,
	},
	{
		id: `EST`,
		value: 20946,
	},
	{
		id: `ETH`,
		value: 433525,
	},
	{
		id: `FIN`,
		value: 873784,
	},
	{
		id: `FJI`,
		value: 927425,
	},
	{
		id: `FLK`,
		value: 288965,
	},
	{
		id: `FRA`,
		value: 587640,
	},
	{
		id: `GAB`,
		value: 645322,
	},
	{
		id: `GBR`,
		value: 193000,
	},
	{
		id: `GEO`,
		value: 125493,
	},
	{
		id: `GHA`,
		value: 137170,
	},
	{
		id: `GIN`,
		value: 786229,
	},
	{
		id: `GMB`,
		value: 561370,
	},
	{
		id: `GNB`,
		value: 759793,
	},
	{
		id: `GNQ`,
		value: 96437,
	},
	{
		id: `GRC`,
		value: 154401,
	},
	{
		id: `GTM`,
		value: 853845,
	},
	{
		id: `GUY`,
		value: 147095,
	},
	{
		id: `HND`,
		value: 740169,
	},
	{
		id: `HRV`,
		value: 162204,
	},
	{
		id: `HTI`,
		value: 639692,
	},
	{
		id: `HUN`,
		value: 581244,
	},
	{
		id: `IDN`,
		value: 927451,
	},
	{
		id: `IND`,
		value: 558816,
	},
	{
		id: `IRL`,
		value: 421196,
	},
	{
		id: `IRN`,
		value: 772004,
	},
	{
		id: `IRQ`,
		value: 801063,
	},
	{
		id: `ISL`,
		value: 939405,
	},
	{
		id: `ISR`,
		value: 373162,
	},
	{
		id: `ITA`,
		value: 730172,
	},
	{
		id: `JAM`,
		value: 771462,
	},
	{
		id: `JOR`,
		value: 107600,
	},
	{
		id: `JPN`,
		value: 831793,
	},
	{
		id: `KAZ`,
		value: 15539,
	},
	{
		id: `KEN`,
		value: 155064,
	},
	{
		id: `KGZ`,
		value: 693420,
	},
	{
		id: `KHM`,
		value: 497041,
	},
	{
		id: `OSA`,
		value: 714439,
	},
	{
		id: `KWT`,
		value: 92774,
	},
	{
		id: `LAO`,
		value: 750483,
	},
	{
		id: `LBN`,
		value: 112897,
	},
	{
		id: `LBR`,
		value: 949289,
	},
	{
		id: `LBY`,
		value: 755271,
	},
	{
		id: `LKA`,
		value: 536725,
	},
	{
		id: `LSO`,
		value: 120898,
	},
	{
		id: `LTU`,
		value: 556047,
	},
	{
		id: `LUX`,
		value: 985992,
	},
	{
		id: `LVA`,
		value: 868076,
	},
	{
		id: `MAR`,
		value: 456063,
	},
	{
		id: `MDA`,
		value: 839919,
	},
	{
		id: `MDG`,
		value: 510252,
	},
	{
		id: `MEX`,
		value: 505842,
	},
	{
		id: `MKD`,
		value: 184524,
	},
	{
		id: `MLI`,
		value: 847751,
	},
	{
		id: `MMR`,
		value: 473800,
	},
	{
		id: `MNE`,
		value: 752242,
	},
	{
		id: `MNG`,
		value: 107021,
	},
	{
		id: `MOZ`,
		value: 519471,
	},
	{
		id: `MRT`,
		value: 915141,
	},
	{
		id: `MWI`,
		value: 165106,
	},
	{
		id: `MYS`,
		value: 810514,
	},
	{
		id: `NAM`,
		value: 598602,
	},
	{
		id: `NCL`,
		value: 646413,
	},
	{
		id: `NER`,
		value: 645278,
	},
	{
		id: `NGA`,
		value: 180260,
	},
	{
		id: `NIC`,
		value: 925607,
	},
	{
		id: `NLD`,
		value: 435620,
	},
	{
		id: `NOR`,
		value: 128705,
	},
	{
		id: `NPL`,
		value: 909306,
	},
	{
		id: `NZL`,
		value: 11288,
	},
	{
		id: `OMN`,
		value: 937008,
	},
	{
		id: `PAK`,
		value: 239621,
	},
	{
		id: `PAN`,
		value: 984498,
	},
	{
		id: `PER`,
		value: 500048,
	},
	{
		id: `PHL`,
		value: 780857,
	},
	{
		id: `PNG`,
		value: 228155,
	},
	{
		id: `POL`,
		value: 165157,
	},
	{
		id: `PRI`,
		value: 909463,
	},
	{
		id: `PRT`,
		value: 816380,
	},
	{
		id: `PRY`,
		value: 811845,
	},
	{
		id: `QAT`,
		value: 392769,
	},
	{
		id: `ROU`,
		value: 123320,
	},
	{
		id: `RUS`,
		value: 79844,
	},
	{
		id: `RWA`,
		value: 871340,
	},
	{
		id: `ESH`,
		value: 791939,
	},
	{
		id: `SAU`,
		value: 151860,
	},
	{
		id: `SDN`,
		value: 820162,
	},
	{
		id: `SDS`,
		value: 117180,
	},
	{
		id: `SEN`,
		value: 60658,
	},
	{
		id: `SLB`,
		value: 953912,
	},
	{
		id: `SLE`,
		value: 680810,
	},
	{
		id: `SLV`,
		value: 25762,
	},
	{
		id: `ABV`,
		value: 699501,
	},
	{
		id: `SOM`,
		value: 499628,
	},
	{
		id: `SRB`,
		value: 412410,
	},
	{
		id: `SUR`,
		value: 553158,
	},
	{
		id: `SVK`,
		value: 712078,
	},
	{
		id: `SVN`,
		value: 537228,
	},
	{
		id: `SWZ`,
		value: 584732,
	},
	{
		id: `SYR`,
		value: 171549,
	},
	{
		id: `TCD`,
		value: 479613,
	},
	{
		id: `TGO`,
		value: 968350,
	},
	{
		id: `THA`,
		value: 602952,
	},
	{
		id: `TJK`,
		value: 4510,
	},
	{
		id: `TKM`,
		value: 302306,
	},
	{
		id: `TLS`,
		value: 659057,
	},
	{
		id: `TTO`,
		value: 149345,
	},
	{
		id: `TUN`,
		value: 857365,
	},
	{
		id: `TUR`,
		value: 279563,
	},
	{
		id: `TWN`,
		value: 154007,
	},
	{
		id: `TZA`,
		value: 652437,
	},
	{
		id: `UGA`,
		value: 876782,
	},
	{
		id: `UKR`,
		value: 459911,
	},
	{
		id: `URY`,
		value: 79,
	},
	{
		id: `USA`,
		value: 729786,
	},
	{
		id: `UZB`,
		value: 729352,
	},
	{
		id: `VEN`,
		value: 193110,
	},
	{
		id: `VNM`,
		value: 901870,
	},
	{
		id: `VUT`,
		value: 802838,
	},
	{
		id: `PSE`,
		value: 909590,
	},
	{
		id: `YEM`,
		value: 410154,
	},
	{
		id: `ZAF`,
		value: 613767,
	},
	{
		id: `ZMB`,
		value: 54399,
	},
	{
		id: `ZWE`,
		value: 910968,
	},
	{
		id: `KOR`,
		value: 990093,
	},
];
