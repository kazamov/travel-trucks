function Icon({
  width = 20,
  height = 20,
  viewBoxWidth = 20,
  viewBoxHeight = 20,
  className,
  children,
} = {}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      fill="none"
    >
      {children}
    </svg>
  );
}

export function Diagram(props) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 4.375C7.5 3.87772 7.69754 3.40081 8.04917 3.04917C8.40081 2.69754 8.87772 2.5 9.375 2.5H10.625C11.1223 2.5 11.5992 2.69754 11.9508 3.04917C12.3025 3.40081 12.5 3.87772 12.5 4.375V5.625C12.5 6.12228 12.3025 6.59919 11.9508 6.95083C11.5992 7.30246 11.1223 7.5 10.625 7.5V8.75H17.5C17.6658 8.75 17.8247 8.81585 17.9419 8.93306C18.0592 9.05027 18.125 9.20924 18.125 9.375V10.625C18.125 10.7908 18.0592 10.9497 17.9419 11.0669C17.8247 11.1842 17.6658 11.25 17.5 11.25C17.3342 11.25 17.1753 11.1842 17.0581 11.0669C16.9408 10.9497 16.875 10.7908 16.875 10.625V10H10.625V10.625C10.625 10.7908 10.5592 10.9497 10.4419 11.0669C10.3247 11.1842 10.1658 11.25 10 11.25C9.83424 11.25 9.67527 11.1842 9.55806 11.0669C9.44085 10.9497 9.375 10.7908 9.375 10.625V10H3.125V10.625C3.125 10.7908 3.05915 10.9497 2.94194 11.0669C2.82473 11.1842 2.66576 11.25 2.5 11.25C2.33424 11.25 2.17527 11.1842 2.05806 11.0669C1.94085 10.9497 1.875 10.7908 1.875 10.625V9.375C1.875 9.20924 1.94085 9.05027 2.05806 8.93306C2.17527 8.81585 2.33424 8.75 2.5 8.75H9.375V7.5C8.87772 7.5 8.40081 7.30246 8.04917 6.95083C7.69754 6.59919 7.5 6.12228 7.5 5.625V4.375ZM10.625 6.25C10.7908 6.25 10.9497 6.18415 11.0669 6.06694C11.1842 5.94973 11.25 5.79076 11.25 5.625V4.375C11.25 4.20924 11.1842 4.05027 11.0669 3.93306C10.9497 3.81585 10.7908 3.75 10.625 3.75H9.375C9.20924 3.75 9.05027 3.81585 8.93306 3.93306C8.81585 4.05027 8.75 4.20924 8.75 4.375V5.625C8.75 5.79076 8.81585 5.94973 8.93306 6.06694C9.05027 6.18415 9.20924 6.25 9.375 6.25H10.625ZM0 14.375C0 13.8777 0.197544 13.4008 0.549175 13.0492C0.900805 12.6975 1.37772 12.5 1.875 12.5H3.125C3.62228 12.5 4.09919 12.6975 4.45083 13.0492C4.80246 13.4008 5 13.8777 5 14.375V15.625C5 16.1223 4.80246 16.5992 4.45083 16.9508C4.09919 17.3025 3.62228 17.5 3.125 17.5H1.875C1.37772 17.5 0.900805 17.3025 0.549175 16.9508C0.197544 16.5992 0 16.1223 0 15.625L0 14.375ZM1.875 13.75C1.70924 13.75 1.55027 13.8158 1.43306 13.9331C1.31585 14.0503 1.25 14.2092 1.25 14.375V15.625C1.25 15.7908 1.31585 15.9497 1.43306 16.0669C1.55027 16.1842 1.70924 16.25 1.875 16.25H3.125C3.29076 16.25 3.44973 16.1842 3.56694 16.0669C3.68415 15.9497 3.75 15.7908 3.75 15.625V14.375C3.75 14.2092 3.68415 14.0503 3.56694 13.9331C3.44973 13.8158 3.29076 13.75 3.125 13.75H1.875ZM7.5 14.375C7.5 13.8777 7.69754 13.4008 8.04917 13.0492C8.40081 12.6975 8.87772 12.5 9.375 12.5H10.625C11.1223 12.5 11.5992 12.6975 11.9508 13.0492C12.3025 13.4008 12.5 13.8777 12.5 14.375V15.625C12.5 16.1223 12.3025 16.5992 11.9508 16.9508C11.5992 17.3025 11.1223 17.5 10.625 17.5H9.375C8.87772 17.5 8.40081 17.3025 8.04917 16.9508C7.69754 16.5992 7.5 16.1223 7.5 15.625V14.375ZM9.375 13.75C9.20924 13.75 9.05027 13.8158 8.93306 13.9331C8.81585 14.0503 8.75 14.2092 8.75 14.375V15.625C8.75 15.7908 8.81585 15.9497 8.93306 16.0669C9.05027 16.1842 9.20924 16.25 9.375 16.25H10.625C10.7908 16.25 10.9497 16.1842 11.0669 16.0669C11.1842 15.9497 11.25 15.7908 11.25 15.625V14.375C11.25 14.2092 11.1842 14.0503 11.0669 13.9331C10.9497 13.8158 10.7908 13.75 10.625 13.75H9.375ZM15 14.375C15 13.8777 15.1975 13.4008 15.5492 13.0492C15.9008 12.6975 16.3777 12.5 16.875 12.5H18.125C18.6223 12.5 19.0992 12.6975 19.4508 13.0492C19.8025 13.4008 20 13.8777 20 14.375V15.625C20 16.1223 19.8025 16.5992 19.4508 16.9508C19.0992 17.3025 18.6223 17.5 18.125 17.5H16.875C16.3777 17.5 15.9008 17.3025 15.5492 16.9508C15.1975 16.5992 15 16.1223 15 15.625V14.375ZM16.875 13.75C16.7092 13.75 16.5503 13.8158 16.4331 13.9331C16.3158 14.0503 16.25 14.2092 16.25 14.375V15.625C16.25 15.7908 16.3158 15.9497 16.4331 16.0669C16.5503 16.1842 16.7092 16.25 16.875 16.25H18.125C18.2908 16.25 18.4497 16.1842 18.5669 16.0669C18.6842 15.9497 18.75 15.7908 18.75 15.625V14.375C18.75 14.2092 18.6842 14.0503 18.5669 13.9331C18.4497 13.8158 18.2908 13.75 18.125 13.75H16.875Z"
        fill="#101828"
      />
    </Icon>
  );
}

export function Wind(props) {
  return (
    <Icon {...props}>
      <g clipPath="url(#clip0_12068_447)">
        <path
          d="M15.625 2.5C14.7962 2.5 14.0013 2.82924 13.4153 3.41529C12.8292 4.00134 12.5 4.7962 12.5 5.625C12.5 5.79076 12.4342 5.94973 12.3169 6.06694C12.1997 6.18415 12.0408 6.25 11.875 6.25C11.7092 6.25 11.5503 6.18415 11.4331 6.06694C11.3158 5.94973 11.25 5.79076 11.25 5.625C11.25 4.75971 11.5066 3.91385 11.9873 3.19438C12.4681 2.47492 13.1513 1.91416 13.9508 1.58303C14.7502 1.2519 15.6299 1.16526 16.4785 1.33407C17.3272 1.50288 18.1067 1.91956 18.7186 2.53141C19.3304 3.14326 19.7471 3.92281 19.9159 4.77148C20.0847 5.62015 19.9981 6.49982 19.667 7.29924C19.3358 8.09867 18.7751 8.78195 18.0556 9.26268C17.3362 9.74341 16.4903 10 15.625 10H0.625C0.45924 10 0.300269 9.93415 0.183058 9.81694C0.065848 9.69973 0 9.54076 0 9.375C0 9.20924 0.065848 9.05027 0.183058 8.93306C0.300269 8.81585 0.45924 8.75 0.625 8.75H15.625C16.4538 8.75 17.2487 8.42076 17.8347 7.83471C18.4208 7.24866 18.75 6.4538 18.75 5.625C18.75 4.7962 18.4208 4.00134 17.8347 3.41529C17.2487 2.82924 16.4538 2.5 15.625 2.5ZM6.875 3.75C6.54348 3.75 6.22554 3.8817 5.99112 4.11612C5.7567 4.35054 5.625 4.66848 5.625 5C5.625 5.16576 5.55915 5.32473 5.44194 5.44194C5.32473 5.55915 5.16576 5.625 5 5.625C4.83424 5.625 4.67527 5.55915 4.55806 5.44194C4.44085 5.32473 4.375 5.16576 4.375 5C4.375 4.50555 4.52162 4.0222 4.79633 3.61108C5.07103 3.19995 5.46148 2.87952 5.91829 2.6903C6.37511 2.50108 6.87777 2.45158 7.36273 2.54804C7.84768 2.6445 8.29314 2.8826 8.64277 3.23223C8.9924 3.58187 9.2305 4.02732 9.32696 4.51228C9.42343 4.99723 9.37392 5.4999 9.1847 5.95671C8.99548 6.41353 8.67505 6.80397 8.26393 7.07868C7.8528 7.35338 7.36945 7.5 6.875 7.5H0.625C0.45924 7.5 0.300269 7.43415 0.183058 7.31694C0.065848 7.19973 0 7.04076 0 6.875C0 6.70924 0.065848 6.55027 0.183058 6.43306C0.300269 6.31585 0.45924 6.25 0.625 6.25H6.875C7.20652 6.25 7.52446 6.11831 7.75888 5.88388C7.9933 5.64946 8.125 5.33152 8.125 5C8.125 4.66848 7.9933 4.35054 7.75888 4.11612C7.52446 3.8817 7.20652 3.75 6.875 3.75ZM0 11.875C0 11.7092 0.065848 11.5503 0.183058 11.4331C0.300269 11.3159 0.45924 11.25 0.625 11.25H13.1775C13.9192 11.25 14.6442 11.4699 15.2609 11.882C15.8776 12.294 16.3582 12.8797 16.642 13.5649C16.9259 14.2502 17.0001 15.0042 16.8554 15.7316C16.7108 16.459 16.3536 17.1272 15.8292 17.6517C15.3047 18.1761 14.6365 18.5333 13.9091 18.6779C13.1817 18.8226 12.4277 18.7484 11.7424 18.4646C11.0572 18.1807 10.4715 17.7001 10.0595 17.0834C9.64743 16.4667 9.4275 15.7417 9.4275 15C9.4275 14.8342 9.49335 14.6753 9.61056 14.5581C9.72777 14.4409 9.88674 14.375 10.0525 14.375C10.2183 14.375 10.3772 14.4409 10.4944 14.5581C10.6117 14.6753 10.6775 14.8342 10.6775 15C10.6775 15.4945 10.8241 15.9778 11.0988 16.3889C11.3735 16.8001 11.764 17.1205 12.2208 17.3097C12.6776 17.4989 13.1803 17.5484 13.6652 17.452C14.1502 17.3555 14.5956 17.1174 14.9453 16.7678C15.2949 16.4181 15.533 15.9727 15.6295 15.4877C15.7259 15.0028 15.6764 14.5001 15.4872 14.0433C15.298 13.5865 14.9775 13.196 14.5664 12.9213C14.1553 12.6466 13.672 12.5 13.1775 12.5H0.625C0.45924 12.5 0.300269 12.4342 0.183058 12.3169C0.065848 12.1997 0 12.0408 0 11.875Z"
          fill="#101828"
        />
      </g>
      <defs>
        <clipPath id="clip0_12068_447">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
}

export function Petrol(props) {
  return (
    <Icon {...props}>
      <path
        d="M3.75 3.125C3.75 2.95924 3.81585 2.80027 3.93306 2.68306C4.05027 2.56585 4.20924 2.5 4.375 2.5H10.625C10.7908 2.5 10.9497 2.56585 11.0669 2.68306C11.1842 2.80027 11.25 2.95924 11.25 3.125V9.375C11.25 9.54076 11.1842 9.69973 11.0669 9.81694C10.9497 9.93415 10.7908 10 10.625 10H4.375C4.20924 10 4.05027 9.93415 3.93306 9.81694C3.81585 9.69973 3.75 9.54076 3.75 9.375V3.125Z"
        fill="#101828"
      />
      <path
        d="M1.25 2.5C1.25 1.83696 1.51339 1.20107 1.98223 0.732233C2.45107 0.263392 3.08696 0 3.75 0L11.25 0C11.913 0 12.5489 0.263392 13.0178 0.732233C13.4866 1.20107 13.75 1.83696 13.75 2.5V12.5C14.413 12.5 15.0489 12.7634 15.5178 13.2322C15.9866 13.7011 16.25 14.337 16.25 15V15.625C16.25 15.7908 16.3158 15.9497 16.4331 16.0669C16.5503 16.1842 16.7092 16.25 16.875 16.25C17.0408 16.25 17.1997 16.1842 17.3169 16.0669C17.4342 15.9497 17.5 15.7908 17.5 15.625V10H16.875C16.7092 10 16.5503 9.93415 16.4331 9.81694C16.3158 9.69973 16.25 9.54076 16.25 9.375V5.46875C16.25 5.30299 16.3158 5.14402 16.4331 5.02681C16.5503 4.9096 16.7092 4.84375 16.875 4.84375H18.7437C18.73 4.24875 18.6775 3.72625 18.4925 3.31625C18.3935 3.07785 18.2209 2.87729 18 2.74375C17.77 2.60625 17.42 2.5 16.875 2.5C16.7092 2.5 16.5503 2.43415 16.4331 2.31694C16.3158 2.19973 16.25 2.04076 16.25 1.875C16.25 1.70924 16.3158 1.55027 16.4331 1.43306C16.5503 1.31585 16.7092 1.25 16.875 1.25C17.58 1.24833 18.1683 1.38833 18.64 1.67C19.1187 1.955 19.4325 2.35875 19.6325 2.80375C20.0013 3.6225 20 4.635 20 5.405V9.37375C20.0002 9.45593 19.9841 9.53734 19.9528 9.61331C19.9214 9.68928 19.8754 9.75833 19.8174 9.8165C19.7593 9.87467 19.6904 9.92082 19.6145 9.95231C19.5386 9.98379 19.4572 10 19.375 10H18.75V15.625C18.75 16.1223 18.5525 16.5992 18.2008 16.9508C17.8492 17.3025 17.3723 17.5 16.875 17.5C16.3777 17.5 15.9008 17.3025 15.5492 16.9508C15.1975 16.5992 15 16.1223 15 15.625V15C15 14.6685 14.8683 14.3505 14.6339 14.1161C14.3995 13.8817 14.0815 13.75 13.75 13.75V18.75H14.375C14.5408 18.75 14.6997 18.8158 14.8169 18.9331C14.9342 19.0503 15 19.2092 15 19.375C15 19.5408 14.9342 19.6997 14.8169 19.8169C14.6997 19.9342 14.5408 20 14.375 20H0.625C0.45924 20 0.300269 19.9342 0.183058 19.8169C0.065848 19.6997 0 19.5408 0 19.375C0 19.2092 0.065848 19.0503 0.183058 18.9331C0.300269 18.8158 0.45924 18.75 0.625 18.75H1.25V2.5ZM12.5 2.5C12.5 2.16848 12.3683 1.85054 12.1339 1.61612C11.8995 1.3817 11.5815 1.25 11.25 1.25H3.75C3.41848 1.25 3.10054 1.3817 2.86612 1.61612C2.6317 1.85054 2.5 2.16848 2.5 2.5V18.75H12.5V2.5Z"
        fill="#101828"
      />
    </Icon>
  );
}

export function Kitchen(props) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.624998 7.5C0.531477 7.50004 0.439157 7.52106 0.354842 7.56152C0.270527 7.60198 0.196366 7.66085 0.137827 7.73378C0.0792885 7.80672 0.0378632 7.89186 0.016605 7.98293C-0.00465315 8.074 -0.00520222 8.16869 0.0149983 8.26L2.08 17.5525C2.23414 18.2466 2.62034 18.8673 3.17485 19.3123C3.72936 19.7573 4.41903 19.9998 5.13 20H12.37C13.081 19.9998 13.7706 19.7573 14.3251 19.3123C14.8797 18.8673 15.2659 18.2466 15.42 17.5525L15.5837 16.815C16.5399 16.9938 17.5281 16.7941 18.3398 16.2581C19.1515 15.722 19.7231 14.8915 19.934 13.9419C20.1449 12.9923 19.9785 11.9979 19.47 11.1686C18.9615 10.3394 18.1507 9.74018 17.2087 9.4975L17.485 8.26C17.5052 8.16869 17.5047 8.074 17.4834 7.98293C17.4621 7.89186 17.4207 7.80672 17.3622 7.73378C17.3036 7.66085 17.2295 7.60198 17.1452 7.56152C17.0608 7.52106 16.9685 7.50004 16.875 7.5H0.624998ZM16.25 15.625C16.1177 15.6251 15.9856 15.6146 15.855 15.5938L16.9387 10.7212C17.5169 10.8887 18.0152 11.259 18.3424 11.7642C18.6695 12.2694 18.8036 12.8756 18.7198 13.4717C18.6361 14.0677 18.3403 14.6135 17.8866 15.0091C17.433 15.4046 16.8519 15.6233 16.25 15.625ZM3.3 17.2812L1.40375 8.75H16.0962L14.2 17.2812C14.1076 17.6977 13.8759 18.0702 13.5432 18.3373C13.2104 18.6043 12.7966 18.7499 12.37 18.75H5.13C4.70338 18.7499 4.28955 18.6043 3.95684 18.3373C3.62413 18.0702 3.39243 17.6977 3.3 17.2812Z"
        fill="#101828"
      />
      <path
        d="M5.5 1.00005L5.49625 1.00505L5.47875 1.0288C5.3878 1.15395 5.30271 1.28326 5.22375 1.4163C5.15667 1.52295 5.09776 1.63452 5.0475 1.75005C5.015 1.82505 5.005 1.86505 5.00125 1.8788V1.8838C5.01567 1.9943 5.05452 2.1002 5.115 2.1938C5.20875 2.36005 5.3375 2.5338 5.5 2.75005L5.5125 2.76505C5.66 2.96255 5.8375 3.1988 5.975 3.4438C6.115 3.6938 6.25 4.01255 6.25 4.37505C6.25 4.61005 6.16875 4.83505 6.10125 4.99255C6.029 5.16015 5.94461 5.32225 5.84875 5.47755C5.75069 5.64147 5.64516 5.8008 5.5325 5.95505L5.51 5.9863L5.50375 5.9963L5.50125 5.9988C5.40196 6.13158 5.25399 6.21947 5.0899 6.24315C4.9258 6.26682 4.75902 6.22434 4.62625 6.12505C4.49348 6.02576 4.40558 5.87779 4.38191 5.7137C4.35823 5.5496 4.40071 5.38283 4.5 5.25005L4.50375 5.24505L4.52125 5.2213C4.6122 5.09615 4.69729 4.96685 4.77625 4.8338C4.84333 4.72715 4.90224 4.61558 4.9525 4.50005C4.985 4.42505 4.995 4.38505 4.99875 4.3713C4.98544 4.25917 4.94698 4.15149 4.88625 4.0563C4.77022 3.86237 4.64117 3.67653 4.5 3.50005L4.4875 3.48505C4.31862 3.26919 4.16412 3.04245 4.025 2.8063C3.85475 2.52471 3.76003 2.20396 3.75 1.87505C3.75 1.64005 3.83125 1.41505 3.89875 1.25755C3.9725 1.08505 4.06625 0.915052 4.15125 0.772552C4.25055 0.609417 4.35604 0.450135 4.4675 0.295052L4.49875 0.251303C4.59804 0.118529 4.74601 0.0306355 4.9101 0.00695907C5.0742 -0.0167174 5.24098 0.0257621 5.37375 0.125053C5.50652 0.224343 5.59442 0.372311 5.61809 0.536405C5.64177 0.7005 5.59929 0.867279 5.5 1.00005ZM9.25 1.00005L9.24625 1.00505L9.22875 1.0288C9.1378 1.15395 9.05271 1.28326 8.97375 1.4163C8.90667 1.52295 8.84776 1.63452 8.7975 1.75005C8.765 1.82505 8.755 1.86505 8.75125 1.8788V1.8838C8.76567 1.9943 8.80452 2.1002 8.865 2.1938C8.95875 2.36005 9.0875 2.5338 9.25 2.75005L9.2625 2.76505C9.41 2.96255 9.5875 3.1988 9.725 3.4438C9.865 3.6938 10 4.01255 10 4.37505C10 4.61005 9.91875 4.83505 9.85125 4.99255C9.779 5.16015 9.69461 5.32225 9.59875 5.47755C9.50069 5.64147 9.39516 5.8008 9.2825 5.95505L9.26 5.9863L9.25375 5.9963L9.25125 5.9988C9.15196 6.13158 9.00399 6.21947 8.8399 6.24315C8.6758 6.26682 8.50902 6.22434 8.37625 6.12505C8.24348 6.02576 8.15558 5.87779 8.13191 5.7137C8.10823 5.5496 8.15071 5.38283 8.25 5.25005L8.25375 5.24505L8.27125 5.2213C8.3622 5.09615 8.44729 4.96685 8.52625 4.8338C8.59333 4.72715 8.65224 4.61558 8.7025 4.50005C8.735 4.42505 8.745 4.38505 8.74875 4.3713C8.73544 4.25917 8.69698 4.15149 8.63625 4.0563C8.52022 3.86237 8.39117 3.67653 8.25 3.50005L8.2375 3.48505C8.06862 3.26919 7.91412 3.04245 7.775 2.8063C7.60475 2.52471 7.51003 2.20396 7.5 1.87505C7.5 1.64005 7.58125 1.41505 7.64875 1.25755C7.7225 1.08505 7.81625 0.915052 7.90125 0.772552C8.00055 0.609417 8.10604 0.450135 8.2175 0.295052L8.24875 0.251303C8.34804 0.118529 8.49601 0.0306355 8.6601 0.00695906C8.8242 -0.0167174 8.99098 0.0257621 9.12375 0.125052C9.25652 0.224343 9.34442 0.372311 9.36809 0.536405C9.39177 0.7005 9.34929 0.867279 9.25 1.00005ZM13 1.00005L12.9963 1.00505L12.9788 1.0288C12.8878 1.15395 12.8027 1.28326 12.7238 1.4163C12.6567 1.52295 12.5978 1.63452 12.5475 1.75005C12.515 1.82505 12.505 1.86505 12.5013 1.8788V1.8838C12.5157 1.9943 12.5545 2.1002 12.615 2.1938C12.7087 2.36005 12.8375 2.5338 13 2.75005L13.0125 2.76505C13.16 2.96255 13.3375 3.1988 13.475 3.4438C13.615 3.6938 13.75 4.01255 13.75 4.37505C13.75 4.61005 13.6687 4.83505 13.6012 4.99255C13.529 5.16015 13.4446 5.32225 13.3488 5.47755C13.2511 5.64144 13.146 5.80078 13.0338 5.95505L13.01 5.9863L13.0037 5.9963L13.0013 5.9988C12.902 6.13158 12.754 6.21947 12.5899 6.24315C12.4258 6.26682 12.259 6.22434 12.1263 6.12505C11.9935 6.02576 11.9056 5.87779 11.8819 5.7137C11.8582 5.5496 11.9007 5.38283 12 5.25005L12.0037 5.24505L12.0212 5.2213C12.1122 5.09615 12.1973 4.96685 12.2762 4.8338C12.3433 4.72715 12.4022 4.61558 12.4525 4.50005C12.485 4.42505 12.495 4.38505 12.4987 4.3713C12.4854 4.25917 12.447 4.15149 12.3863 4.0563C12.2702 3.86237 12.1412 3.67653 12 3.50005L11.9875 3.48505C11.8186 3.26919 11.6641 3.04245 11.525 2.8063C11.3547 2.52471 11.26 2.20396 11.25 1.87505C11.25 1.64005 11.3313 1.41505 11.3988 1.25755C11.4725 1.08505 11.5663 0.915052 11.6512 0.772552C11.7505 0.609417 11.856 0.450135 11.9675 0.295052L11.9987 0.251303C12.098 0.118529 12.246 0.0306355 12.4101 0.00695906C12.5742 -0.0167174 12.741 0.0257621 12.8737 0.125052C13.0065 0.224343 13.0944 0.372311 13.1181 0.536405C13.1418 0.7005 13.0993 0.867279 13 1.00005Z"
        fill="#101828"
      />
    </Icon>
  );
}

export function UIRadios(props) {
  return (
    <Icon {...props}>
      <g clipPath="url(#clip0_12071_579)">
        <path
          d="M8.75 3.125C8.75 2.95924 8.81585 2.80027 8.93306 2.68306C9.05027 2.56585 9.20924 2.5 9.375 2.5H18.125C18.2908 2.5 18.4497 2.56585 18.5669 2.68306C18.6842 2.80027 18.75 2.95924 18.75 3.125V4.375C18.75 4.54076 18.6842 4.69973 18.5669 4.81694C18.4497 4.93415 18.2908 5 18.125 5H9.375C9.20924 5 9.05027 4.93415 8.93306 4.81694C8.81585 4.69973 8.75 4.54076 8.75 4.375V3.125ZM5.58794e-08 15C5.58794e-08 14.0054 0.395088 13.0516 1.09835 12.3483C1.80161 11.6451 2.75544 11.25 3.75 11.25C4.74456 11.25 5.69839 11.6451 6.40165 12.3483C7.10491 13.0516 7.5 14.0054 7.5 15C7.5 15.9946 7.10491 16.9484 6.40165 17.6517C5.69839 18.3549 4.74456 18.75 3.75 18.75C2.75544 18.75 1.80161 18.3549 1.09835 17.6517C0.395088 16.9484 5.58794e-08 15.9946 5.58794e-08 15ZM8.75 13.125C8.75 12.9592 8.81585 12.8003 8.93306 12.6831C9.05027 12.5658 9.20924 12.5 9.375 12.5H18.125C18.2908 12.5 18.4497 12.5658 18.5669 12.6831C18.6842 12.8003 18.75 12.9592 18.75 13.125V14.375C18.75 14.5408 18.6842 14.6997 18.5669 14.8169C18.4497 14.9342 18.2908 15 18.125 15H9.375C9.20924 15 9.05027 14.9342 8.93306 14.8169C8.81585 14.6997 8.75 14.5408 8.75 14.375V13.125ZM8.75 6.875C8.75 6.70924 8.81585 6.55027 8.93306 6.43306C9.05027 6.31585 9.20924 6.25 9.375 6.25H15.625C15.7908 6.25 15.9497 6.31585 16.0669 6.43306C16.1842 6.55027 16.25 6.70924 16.25 6.875C16.25 7.04076 16.1842 7.19973 16.0669 7.31694C15.9497 7.43415 15.7908 7.5 15.625 7.5H9.375C9.20924 7.5 9.05027 7.43415 8.93306 7.31694C8.81585 7.19973 8.75 7.04076 8.75 6.875ZM8.75 16.875C8.75 16.7092 8.81585 16.5503 8.93306 16.4331C9.05027 16.3158 9.20924 16.25 9.375 16.25H15.625C15.7908 16.25 15.9497 16.3158 16.0669 16.4331C16.1842 16.5503 16.25 16.7092 16.25 16.875C16.25 17.0408 16.1842 17.1997 16.0669 17.3169C15.9497 17.4342 15.7908 17.5 15.625 17.5H9.375C9.20924 17.5 9.05027 17.4342 8.93306 17.3169C8.81585 17.1997 8.75 17.0408 8.75 16.875ZM3.75 1.25C3.25754 1.25 2.76991 1.347 2.31494 1.53545C1.85997 1.72391 1.44657 2.00013 1.09835 2.34835C0.75013 2.69657 0.473907 3.10997 0.285452 3.56494C0.0969966 4.01991 0 4.50754 0 5C0 5.49246 0.0969966 5.98009 0.285452 6.43506C0.473907 6.89003 0.75013 7.30343 1.09835 7.65165C1.44657 7.99987 1.85997 8.27609 2.31494 8.46455C2.76991 8.653 3.25754 8.75 3.75 8.75C4.74456 8.75 5.69839 8.35491 6.40165 7.65165C7.10491 6.94839 7.5 5.99456 7.5 5C7.5 4.00544 7.10491 3.05161 6.40165 2.34835C5.69839 1.64509 4.74456 1.25 3.75 1.25ZM3.75 6.875C3.25272 6.875 2.77581 6.67746 2.42417 6.32583C2.07254 5.97419 1.875 5.49728 1.875 5C1.875 4.50272 2.07254 4.02581 2.42417 3.67417C2.77581 3.32254 3.25272 3.125 3.75 3.125C4.24728 3.125 4.72419 3.32254 5.07583 3.67417C5.42746 4.02581 5.625 4.50272 5.625 5C5.625 5.49728 5.42746 5.97419 5.07583 6.32583C4.72419 6.67746 4.24728 6.875 3.75 6.875Z"
          fill="#101828"
        />
      </g>
      <defs>
        <clipPath id="clip0_12071_579">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
}

export function Droplet(props) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.0125 1C7.6125 0.36875 8 0 8 0C8.13667 0.453333 8.29125 0.885833 8.46375 1.2975C9.47875 3.73 11.055 5.485 12.46 7.0475C14.0975 8.87 15.5 10.4312 15.5 12.5C15.5 14.4891 14.7098 16.3968 13.3033 17.8033C11.8968 19.2098 9.98912 20 8 20C6.01088 20 4.10322 19.2098 2.6967 17.8033C1.29018 16.3968 0.5 14.4891 0.5 12.5C0.5 8.335 4.975 3.14625 7.0125 1ZM7.52875 2.27625C6.72569 3.14463 5.96281 4.04933 5.2425 4.9875C4.335 6.175 3.4475 7.4975 2.7925 8.825C2.13 10.1663 1.75 11.4225 1.75 12.5C1.75 14.1576 2.40848 15.7473 3.58058 16.9194C4.75269 18.0915 6.3424 18.75 8 18.75C9.6576 18.75 11.2473 18.0915 12.4194 16.9194C13.5915 15.7473 14.25 14.1576 14.25 12.5C14.25 10.9987 13.255 9.80375 11.5238 7.875L11.4862 7.835C10.1875 6.3875 8.625 4.65125 7.52875 2.27625Z"
        fill="#101828"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.69125 9.71999C4.71625 7.66875 5.8375 6.27875 6.3075 5.8075L7.1925 6.6925C6.83 7.055 5.7825 8.33124 4.80875 10.28L3.69125 9.71999Z"
        fill="#101828"
      />
    </Icon>
  );
}

export function People(props) {
  return (
    <Icon {...props}>
      <path
        d="M18.75 17.5C18.75 17.5 20 17.5 20 16.25C20 15 18.75 11.25 13.75 11.25C8.75 11.25 7.5 15 7.5 16.25C7.5 17.5 8.75 17.5 8.75 17.5H18.75ZM8.7775 16.25L8.75 16.245C8.75125 15.915 8.95875 14.9575 9.7 14.095C10.39 13.2863 11.6025 12.5 13.75 12.5C15.8962 12.5 17.1087 13.2875 17.8 14.095C18.5413 14.9575 18.7475 15.9163 18.75 16.245L18.74 16.2475L18.7225 16.25H8.7775ZM13.75 8.75C14.413 8.75 15.0489 8.48661 15.5178 8.01777C15.9866 7.54893 16.25 6.91304 16.25 6.25C16.25 5.58696 15.9866 4.95107 15.5178 4.48223C15.0489 4.01339 14.413 3.75 13.75 3.75C13.087 3.75 12.4511 4.01339 11.9822 4.48223C11.5134 4.95107 11.25 5.58696 11.25 6.25C11.25 6.91304 11.5134 7.54893 11.9822 8.01777C12.4511 8.48661 13.087 8.75 13.75 8.75ZM17.5 6.25C17.5 6.74246 17.403 7.23009 17.2145 7.68506C17.0261 8.14003 16.7499 8.55343 16.4017 8.90165C16.0534 9.24987 15.64 9.52609 15.1851 9.71455C14.7301 9.903 14.2425 10 13.75 10C13.2575 10 12.7699 9.903 12.3149 9.71455C11.86 9.52609 11.4466 9.24987 11.0983 8.90165C10.7501 8.55343 10.4739 8.14003 10.2855 7.68506C10.097 7.23009 10 6.74246 10 6.25C10 5.25544 10.3951 4.30161 11.0983 3.59835C11.8016 2.89509 12.7554 2.5 13.75 2.5C14.7446 2.5 15.6984 2.89509 16.4017 3.59835C17.1049 4.30161 17.5 5.25544 17.5 6.25ZM8.67 11.6C8.1697 11.4436 7.65438 11.3402 7.1325 11.2913C6.83922 11.2626 6.54467 11.2489 6.25 11.25C1.25 11.25 0 15 0 16.25C0 17.0833 0.416667 17.5 1.25 17.5H6.52C6.33478 17.1097 6.24237 16.6819 6.25 16.25C6.25 14.9875 6.72125 13.6975 7.6125 12.62C7.91625 12.2525 8.27 11.9087 8.67 11.6ZM6.15 12.5C5.41066 13.6118 5.01106 14.9148 5 16.25H1.25C1.25 15.925 1.455 14.9625 2.2 14.095C2.88125 13.3 4.065 12.525 6.15 12.5013V12.5ZM1.875 6.875C1.875 5.88044 2.27009 4.92661 2.97335 4.22335C3.67661 3.52009 4.63044 3.125 5.625 3.125C6.61956 3.125 7.57339 3.52009 8.27665 4.22335C8.97991 4.92661 9.375 5.88044 9.375 6.875C9.375 7.86956 8.97991 8.82339 8.27665 9.52665C7.57339 10.2299 6.61956 10.625 5.625 10.625C4.63044 10.625 3.67661 10.2299 2.97335 9.52665C2.27009 8.82339 1.875 7.86956 1.875 6.875ZM5.625 4.375C4.96196 4.375 4.32607 4.63839 3.85723 5.10723C3.38839 5.57607 3.125 6.21196 3.125 6.875C3.125 7.53804 3.38839 8.17393 3.85723 8.64277C4.32607 9.11161 4.96196 9.375 5.625 9.375C6.28804 9.375 6.92393 9.11161 7.39277 8.64277C7.86161 8.17393 8.125 7.53804 8.125 6.875C8.125 6.21196 7.86161 5.57607 7.39277 5.10723C6.92393 4.63839 6.28804 4.375 5.625 4.375Z"
        fill="#101828"
      />
    </Icon>
  );
}

export function Map(props) {
  return (
    <Icon {...props}>
      <g clipPath="url(#clip0_12071_604)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.7712 0.141029C19.8428 0.199699 19.9005 0.273527 19.94 0.357185C19.9796 0.440842 20.0001 0.53224 20 0.624779V18.1248C19.9999 18.2692 19.9498 18.4092 19.8582 18.5208C19.7666 18.6325 19.6391 18.709 19.4975 18.7373L13.2475 19.9873C13.1666 20.0034 13.0834 20.0034 13.0025 19.9873L6.875 18.7623L0.7475 19.9873C0.656861 20.0054 0.563332 20.0032 0.473651 19.9808C0.38397 19.9584 0.30037 19.9164 0.228874 19.8578C0.157378 19.7993 0.0997667 19.7255 0.0601897 19.642C0.0206127 19.5585 5.58159e-05 19.4672 0 19.3748L0 1.87478C8.72276e-05 1.73035 0.0501951 1.5904 0.141804 1.47874C0.233413 1.36708 0.360869 1.29059 0.5025 1.26228L6.7525 0.0122789C6.83337 -0.00388454 6.91663 -0.00388454 6.9975 0.0122789L13.125 1.23728L19.2525 0.0122789C19.3431 -0.00595135 19.4366 -0.00385945 19.5263 0.0184039C19.616 0.0406672 19.6997 0.0825478 19.7712 0.141029ZM12.5 2.38728L7.5 1.38728V17.6123L12.5 18.6123V2.38728ZM13.75 18.6123L18.75 17.6123V1.38728L13.75 2.38728V18.6123ZM6.25 17.6123V1.38728L1.25 2.38728V18.6123L6.25 17.6123Z"
          fill="#101828"
        />
      </g>
      <defs>
        <clipPath id="clip0_12071_604">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
}

export function TV(props) {
  return (
    <Icon {...props} viewBoxWidth={32} viewBoxHeight={32}>
      <path
        d="M0 8C0 8 0 4 4 4H28C28 4 32 4 32 8V20C32 20 32 24 28 24H20C20 25.3333 20.1667 26.3333 20.5 27H22C22.2652 27 22.5196 27.1054 22.7071 27.2929C22.8946 27.4804 23 27.7348 23 28C23 28.2652 22.8946 28.5196 22.7071 28.7071C22.5196 28.8946 22.2652 29 22 29H10C9.73478 29 9.48043 28.8946 9.29289 28.7071C9.10536 28.5196 9 28.2652 9 28C9 27.7348 9.10536 27.4804 9.29289 27.2929C9.48043 27.1054 9.73478 27 10 27H11.5C11.8333 26.3333 12 25.3333 12 24H4C4 24 0 24 0 20V8ZM2.796 6.29C2.57644 6.44309 2.4012 6.65145 2.288 6.894C2.11952 7.24697 2.02168 7.62948 2 8.02V20C2 20.65 2.156 21.004 2.29 21.204C2.43 21.412 2.63133 21.5813 2.894 21.712C3.23168 21.8736 3.59663 21.9706 3.97 21.998L4.02 22H28C28.65 22 29.004 21.844 29.204 21.71C29.4236 21.5569 29.5988 21.3486 29.712 21.106C29.8736 20.7683 29.9706 20.4034 29.998 20.03L30 19.98V8C30 7.35 29.844 6.996 29.71 6.796C29.5569 6.57644 29.3486 6.4012 29.106 6.288C28.753 6.11952 28.3705 6.02168 27.98 6H4C3.35 6 2.996 6.156 2.796 6.29Z"
        fill="#101828"
      />
    </Icon>
  );
}

export function Grid1_2(props) {
  return (
    <Icon {...props} viewBoxWidth={32} viewBoxHeight={32}>
      <g clipPath="url(#clip0_12138_451)">
        <path
          d="M12 2H2V30H12V2ZM30 2H20V12H30V2ZM30 20V30H20V20H30ZM0 2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0L12 0C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V30C14 30.5304 13.7893 31.0391 13.4142 31.4142C13.0391 31.7893 12.5304 32 12 32H2C1.46957 32 0.960859 31.7893 0.585786 31.4142C0.210714 31.0391 0 30.5304 0 30V2ZM18 2C18 1.46957 18.2107 0.960859 18.5858 0.585786C18.9609 0.210714 19.4696 0 20 0L30 0C30.5304 0 31.0391 0.210714 31.4142 0.585786C31.7893 0.960859 32 1.46957 32 2V12C32 12.5304 31.7893 13.0391 31.4142 13.4142C31.0391 13.7893 30.5304 14 30 14H20C19.4696 14 18.9609 13.7893 18.5858 13.4142C18.2107 13.0391 18 12.5304 18 12V2ZM20 18C19.4696 18 18.9609 18.2107 18.5858 18.5858C18.2107 18.9609 18 19.4696 18 20V30C18 30.5304 18.2107 31.0391 18.5858 31.4142C18.9609 31.7893 19.4696 32 20 32H30C30.5304 32 31.0391 31.7893 31.4142 31.4142C31.7893 31.0391 32 30.5304 32 30V20C32 19.4696 31.7893 18.9609 31.4142 18.5858C31.0391 18.2107 30.5304 18 30 18H20Z"
          fill="#101828"
        />
      </g>
      <defs>
        <clipPath id="clip0_12138_451">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </Icon>
  );
}

export function Grid(props) {
  return (
    <Icon {...props} viewBoxWidth={32} viewBoxHeight={32}>
      <path
        d="M2 5C2 4.20435 2.31607 3.44129 2.87868 2.87868C3.44129 2.31607 4.20435 2 5 2H11C11.7956 2 12.5587 2.31607 13.1213 2.87868C13.6839 3.44129 14 4.20435 14 5V11C14 11.7956 13.6839 12.5587 13.1213 13.1213C12.5587 13.6839 11.7956 14 11 14H5C4.20435 14 3.44129 13.6839 2.87868 13.1213C2.31607 12.5587 2 11.7956 2 11V5ZM5 4C4.73478 4 4.48043 4.10536 4.29289 4.29289C4.10536 4.48043 4 4.73478 4 5V11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12H11C11.2652 12 11.5196 11.8946 11.7071 11.7071C11.8946 11.5196 12 11.2652 12 11V5C12 4.73478 11.8946 4.48043 11.7071 4.29289C11.5196 4.10536 11.2652 4 11 4H5ZM18 5C18 4.20435 18.3161 3.44129 18.8787 2.87868C19.4413 2.31607 20.2044 2 21 2H27C27.7956 2 28.5587 2.31607 29.1213 2.87868C29.6839 3.44129 30 4.20435 30 5V11C30 11.7956 29.6839 12.5587 29.1213 13.1213C28.5587 13.6839 27.7956 14 27 14H21C20.2044 14 19.4413 13.6839 18.8787 13.1213C18.3161 12.5587 18 11.7956 18 11V5ZM21 4C20.7348 4 20.4804 4.10536 20.2929 4.29289C20.1054 4.48043 20 4.73478 20 5V11C20 11.2652 20.1054 11.5196 20.2929 11.7071C20.4804 11.8946 20.7348 12 21 12H27C27.2652 12 27.5196 11.8946 27.7071 11.7071C27.8946 11.5196 28 11.2652 28 11V5C28 4.73478 27.8946 4.48043 27.7071 4.29289C27.5196 4.10536 27.2652 4 27 4H21ZM2 21C2 20.2044 2.31607 19.4413 2.87868 18.8787C3.44129 18.3161 4.20435 18 5 18H11C11.7956 18 12.5587 18.3161 13.1213 18.8787C13.6839 19.4413 14 20.2044 14 21V27C14 27.7956 13.6839 28.5587 13.1213 29.1213C12.5587 29.6839 11.7956 30 11 30H5C4.20435 30 3.44129 29.6839 2.87868 29.1213C2.31607 28.5587 2 27.7956 2 27V21ZM5 20C4.73478 20 4.48043 20.1054 4.29289 20.2929C4.10536 20.4804 4 20.7348 4 21V27C4 27.2652 4.10536 27.5196 4.29289 27.7071C4.48043 27.8946 4.73478 28 5 28H11C11.2652 28 11.5196 27.8946 11.7071 27.7071C11.8946 27.5196 12 27.2652 12 27V21C12 20.7348 11.8946 20.4804 11.7071 20.2929C11.5196 20.1054 11.2652 20 11 20H5ZM18 21C18 20.2044 18.3161 19.4413 18.8787 18.8787C19.4413 18.3161 20.2044 18 21 18H27C27.7956 18 28.5587 18.3161 29.1213 18.8787C29.6839 19.4413 30 20.2044 30 21V27C30 27.7956 29.6839 28.5587 29.1213 29.1213C28.5587 29.6839 27.7956 30 27 30H21C20.2044 30 19.4413 29.6839 18.8787 29.1213C18.3161 28.5587 18 27.7956 18 27V21ZM21 20C20.7348 20 20.4804 20.1054 20.2929 20.2929C20.1054 20.4804 20 20.7348 20 21V27C20 27.2652 20.1054 27.5196 20.2929 27.7071C20.4804 27.8946 20.7348 28 21 28H27C27.2652 28 27.5196 27.8946 27.7071 27.7071C27.8946 27.5196 28 27.2652 28 27V21C28 20.7348 27.8946 20.4804 27.7071 20.2929C27.5196 20.1054 27.2652 20 27 20H21Z"
        fill="#101828"
      />
    </Icon>
  );
}

export function Grid3_3(props) {
  return (
    <Icon {...props} viewBoxWidth={32} viewBoxHeight={32}>
      <path
        d="M8 4V8H4V4H8ZM10 28V24C10 23.4696 9.78929 22.9609 9.41421 22.5858C9.03914 22.2107 8.53043 22 8 22H4C3.46957 22 2.96086 22.2107 2.58579 22.5858C2.21071 22.9609 2 23.4696 2 24V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H8C8.53043 30 9.03914 29.7893 9.41421 29.4142C9.78929 29.0391 10 28.5304 10 28ZM10 18V14C10 13.4696 9.78929 12.9609 9.41421 12.5858C9.03914 12.2107 8.53043 12 8 12H4C3.46957 12 2.96086 12.2107 2.58579 12.5858C2.21071 12.9609 2 13.4696 2 14V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H8C8.53043 20 9.03914 19.7893 9.41421 19.4142C9.78929 19.0391 10 18.5304 10 18ZM10 8V4C10 3.46957 9.78929 2.96086 9.41421 2.58579C9.03914 2.21071 8.53043 2 8 2H4C3.46957 2 2.96086 2.21071 2.58579 2.58579C2.21071 2.96086 2 3.46957 2 4V8C2 8.53043 2.21071 9.03914 2.58579 9.41421C2.96086 9.78929 3.46957 10 4 10H8C8.53043 10 9.03914 9.78929 9.41421 9.41421C9.78929 9.03914 10 8.53043 10 8ZM20 28V24C20 23.4696 19.7893 22.9609 19.4142 22.5858C19.0391 22.2107 18.5304 22 18 22H14C13.4696 22 12.9609 22.2107 12.5858 22.5858C12.2107 22.9609 12 23.4696 12 24V28C12 28.5304 12.2107 29.0391 12.5858 29.4142C12.9609 29.7893 13.4696 30 14 30H18C18.5304 30 19.0391 29.7893 19.4142 29.4142C19.7893 29.0391 20 28.5304 20 28ZM20 18V14C20 13.4696 19.7893 12.9609 19.4142 12.5858C19.0391 12.2107 18.5304 12 18 12H14C13.4696 12 12.9609 12.2107 12.5858 12.5858C12.2107 12.9609 12 13.4696 12 14V18C12 18.5304 12.2107 19.0391 12.5858 19.4142C12.9609 19.7893 13.4696 20 14 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18ZM20 8V4C20 3.46957 19.7893 2.96086 19.4142 2.58579C19.0391 2.21071 18.5304 2 18 2H14C13.4696 2 12.9609 2.21071 12.5858 2.58579C12.2107 2.96086 12 3.46957 12 4V8C12 8.53043 12.2107 9.03914 12.5858 9.41421C12.9609 9.78929 13.4696 10 14 10H18C18.5304 10 19.0391 9.78929 19.4142 9.41421C19.7893 9.03914 20 8.53043 20 8ZM18 4V8H14V4H18ZM28 4V8H24V4H28ZM8 14V18H4V14H8ZM18 14V18H14V14H18ZM28 14H24V18H28V14ZM8 24V28H4V24H8ZM18 24V28H14V24H18ZM28 24V28H24V24H28ZM24 2C23.4696 2 22.9609 2.21071 22.5858 2.58579C22.2107 2.96086 22 3.46957 22 4V8C22 8.53043 22.2107 9.03914 22.5858 9.41421C22.9609 9.78929 23.4696 10 24 10H28C28.5304 10 29.0391 9.78929 29.4142 9.41421C29.7893 9.03914 30 8.53043 30 8V4C30 3.46957 29.7893 2.96086 29.4142 2.58579C29.0391 2.21071 28.5304 2 28 2H24ZM22 14C22 13.4696 22.2107 12.9609 22.5858 12.5858C22.9609 12.2107 23.4696 12 24 12H28C28.5304 12 29.0391 12.2107 29.4142 12.5858C29.7893 12.9609 30 13.4696 30 14V18C30 18.5304 29.7893 19.0391 29.4142 19.4142C29.0391 19.7893 28.5304 20 28 20H24C23.4696 20 22.9609 19.7893 22.5858 19.4142C22.2107 19.0391 22 18.5304 22 18V14ZM24 22C23.4696 22 22.9609 22.2107 22.5858 22.5858C22.2107 22.9609 22 23.4696 22 24V28C22 28.5304 22.2107 29.0391 22.5858 29.4142C22.9609 29.7893 23.4696 30 24 30H28C28.5304 30 29.0391 29.7893 29.4142 29.4142C29.7893 29.0391 30 28.5304 30 28V24C30 23.4696 29.7893 22.9609 29.4142 22.5858C29.0391 22.2107 28.5304 22 28 22H24Z"
        fill="#101828"
      />
    </Icon>
  );
}
