import React from 'react';
import PropTypes from 'prop-types';
import FoodItem from './FoodItem';
import { Route, Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        password: ''
      }
    }

    handleName(event){
    this.setState({name: event.target.value})
}
    handlePassword(event){
    this.setState({password: event.target.value})
}
    handleSubmit(e){
    e.preventDefault();
    var name = this.state.name;
    var phone = this.state.password;

    this.setState({name: '', password: ''});
    console.log(this.state);
}

    render() {
    return (
        <div>
          <h1>Welcome</h1>
          <form>
            <input type="text" placeholder="Enter Name" value={this.state.name} onChange={(event) =>
              this.handleName(event)}/>
              <input type="password" placeholder="Enter Password" value={this.state.password} onChange={(event) =>
              this.handlePassword(event)}/>
              <Link to="/fridge">Check out fridge</Link>
          </form>
        </div>
    );
  }
};

Login.propTypes = {
    name: PropTypes.string,
    password: PropTypes.string
};



class FridgeContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foodItems: [{
                name: 'egg',
                expiryDate: new Date().toUTCString(),
                imageUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFRUXFRUVFxUVFRUVFRUXFRUXFhUXFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lICYrLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAgMEBgcAAQj/xABAEAABAwICBwUFBQYGAwAAAAABAAIDBBEFIQYSMUFRYXETIoGRsQcUMkKhI1JywdEVYpKi4fAWM0NTgvGywtL/xAAaAQACAwEBAAAAAAAAAAAAAAACAwEEBQAG/8QAKBEAAgIBBAEFAAIDAQAAAAAAAAECEQMEEiExQRMUIlFhMnFSkaEF/9oADAMBAAIRAxEAPwAPSTmSQMB5k8BvV2oJWsAAyH97Vm+jlTk5/E28B/UlWamxBYco0z0SyWi+0WIgCyJdqxzeao1PWKfFXFGslKmLeJN2iHpvo42oYZI+7OwXa4fMB8juI9FneG4nfuuycDYg7QRkQtUNdxWRae0/Y1ZkjyEg1vHeoxJTez/Qyc3jju8eS4UUokbzGR/IqQYFnGGaQvieHWJ3EcRy5rSaWta9gcNhAIuLHxB2FHLE4dilkjPmIlrE60JDpgE5HO071BwsSEJ6KsskGxUOoNkDGQQjSPERqtud/wCSs2j+JCeFrwb5WP4hkVW5tB5q+OMsmjhbrPu5+sXO2Buq0DZ8WZIRnRnQKow/XvUxzRPzI1XMc14GTm3JBuMiMtg4K/p8TitxR1WeMns+g+kOKiS1dlCOIEnutc78IJ9E6U6K8YWFw5SaaRBYppP9p/8ACVLjnI2gjqCPVK9bkb6FotFPUi2aDezLRiKiptew7af7R7rZhriTHGOAa0jLiSUG0lxn3elllJt3S1vN7sm/r0BVsp6vuttssLdLJ8J2VZ42ug8JAvdcIMKxe+/JokMa4XmuEI9+Xe+rqIJtdSslFnDMbDvaeRVLxxhidqO6g7nDiFZ/fUE0uh7ancW/HHd7OOXxN8Rl1sq2owKa3LsuaXUOEtr6f/CoTnNMOamKSr1gCpazUajRFkCiyOKnShQp7KGwoxsXhmImOVp3XAPQ5FXGTE7jIrMcRqQzPgptBjJI2oXfYxJLhltqq/mglZV33qI+suo0sqlIXI8dNmuTBXKQQRo/FaAcdZwPXWKNUzkHpX6j3s3X1h47fRFaEOc4MaC5xIAAFySdwCZP5Sb+wIrakvoN0hKn3ICtGj2gx1Q6ofY/7bLXH4n7PLzVlbotS2sY79Xv/Ipi0k2voQ9Zji+OTJ6iqIVN00k1xHbM61gN5vsC3fE/Z/SyDuF8R3EO1h4h1/ULNMd0HqaaoZI8CSBt3CRm51rN12HNu055jLauWnnilufgZ7nHmjsurIejOjMcDA+UB0lrm+YbyH6qFjeIvbJdlrDaNx/RHpp+6jfs/wBF2Su96naHNa60TDmHOBze4bwDkBxB4BRiUskgsso4ofgDwHReurWh7Y+yYdj5iWAji1oBcRztYqwx+yuo2msYDwELiPPXHotObKEsPV5aaCM2WsyN8cGT1mg9fCLsMc4G5ji1/wDC/L6qrvnkMhiLHNeDZwe0tLeoOa+gboXjmBRVI74s8fDIB3m8ubeSB6WF2g462dUyj4I4sjAuclYKmtvHYnMoLLTOhJjfkR5EbiOSiyVRGZQ58zxR47GafAs07k+AnR0LL97M88wOgR2GmZbaFTRidt6dbix4rOhlXclZozweIui4dkxKfRtIyKqH7UPFK/bBG/6pvq4/MRT08/EhnTDRiOrYGOe5jmaxYWnuguGeszY76Hnmp9FJ2TWxF+uWsaNe2rrWaBfVubG996HvxO+9QsSq+7rt2tz6jeEEM7Uq8DZaZOP6WUzpPaFDMMrRI0EHaESaFrRfBiZI0zu1K7tilhi8cxGKobNQUl1YuexRJ2E5DaTYdTkFDYUVyU4wGNxA2XNul8k+KmwUnH8IkheQw3bmbHiczY7s1Vq+rc3a0jwv6LNnhafBsY8sZLlhWrxEDehtM+epfqU8ZfxdsY3q78tqc0Z0clrXa8l2w35gv5DgOa13B8MihYGMaGtGwBLUFdDZTpWUKk9mbpQDUTnjqxAD+Z17+QRgezmmYMnTDnrt/wDmyuUta1uxQKrFbpjjFKmxCyTbuij4hoU5ucMut+68WP8AEMvoFVqtro3FkjS1w3H+8xzWlz1yr2kULKiMtNg8X1Hb2n9OISUhzkUw1QXKqVDpWuc1xIcCQQNgIyNlyse2/St7lfQQxKfVkD/Potc9llA1sfvThd8lwy/ys2XHN3pbisYxh+RW4YK8RwxxtyDGMaOjWgK1p4KlJlfV5Hbii/xVKlMnVSpsQROCt5q5Rnh9siRPGHAg5qDFUqQ2ZDRxmWmuA9heSMfZnaPuHly9FaqNwhijjGxrGt8hmfO6K4vE18Za4Agggjqq7Wv7yVDHGEm15LE8sskFF+AzFiKlx1t1VmOKkxTEJ1iKLUypTzZ1XIaoqbFULiBGldOHwmT5o+91b8w8s/BZ9XVAOYWiYhJeJ44tIWQQzarnRE5tJA6bvpZUNZHpmpoH2h0ym6W2Yr0MunGwrKrk1vBzZivTMUsQpLokYHJHfUFJdWZEJM8aG1RsEKXIzwGsLqjGAflIBKtNFiTXDIhVcWawDgAPIIZPI4G7A7qLgea1t3prkxnD1W6NMZOEoyBZm3GKlvw/zG/oApDNI5vmFuYzC5aiAD0ky+yyhM0VSBIHbbbOvFVemry85uujNMU2Mt3Ipw28BLGHCQXVT/Z4kk1T8O/9EfncbIBBW2ldyNkrUz2wtD9JDdPnot9KWxtDWgAAbAkT4hzQV9coktUSsxOjUlQUnryoM1bzUJ8pKZcjSEsXPWlDKirKflCHVQUo4F1tG2R5edpt9AB+S5P+6yHMbDsXidvf2IeO/BXo8MkqCSBZgyvx6LYcNN42Hi1vpmhWHYcxrA0CwAsAjGFOGbOGY6Jumz7pbfHgXq8NR3efJMZdSopiEjUSgFfujOSsnwVaIQ1SBBOslIUbyfTCNfVIJ21yRvB/6T08l1V9JMX911ZrXAcA4by1xANuY2+CCcvIyEfBaGNTzWqHhlcyVjXscHNcLgjeiLUUZAzjR6xqlQplqkRFGKFVR7h6LGdK3FlSSMjYH1WzTku7rRdxyACHw+zqnfL21UTK7dGCWxjqR3nHxA5JU47uB2KezkyGDHw34slKOkIGZyHE7FvtDhNPCLRQxRj9xjW+ZAzUwhVno4/ZcX/oPyj56i0iad4UluLtO9bPiWjNHP8A51NC8/eLGh3g8WcPAqg6SeyJti+hlLHbexlcXMPJsnxN8dbwS5aN+GNhr4P+SoqFRXtttQ+KXWdrnJrcxzPHoEHqopoJjDUxuje05sd9DwcDuIuCpVRNrarfvHPoP7CGGDZ8peBk9Rv+EfJYcELp5QTkzcOPMrTDh1MIhfN1lQcEIbZHzW81V9duTbVj3hSSSdEbEMHYc2oDVUJarDLUqBUSXQORKj+leLHNN25I3guJknUfkdx4pggKPUC2Y2hMxahwYOTAskaZbJHXCp1QC2d453HQ5oxS4kHMBvnbPrvQfFqpmsHXzHDM28Fo54+pDgztPP08lS/onRPJT4YoFHUtIuCpgmWdVdmi+ehwMSXBNPqVFmrQN6lMjaKqCoIj13au7eeA/VIlqS7Jvml051UVMHgLHVGQGWxeIeahcoomwoKjJRp6pzO+02cMwoTZ0meW4QRTTCfPZccIxxk7ODx8Td46cRzUt1UAsrnlc1wdGSHXy1dtzutvvwWg6PYPUSsDqq0Z+6098ji7cw8s/BaEdQnH5GfPTVL49BRlW3ilmpbxROjwSnb/AKYPN13H6qc7B4SP8png0D6hAsl9HOCXZVpaoLO/aZiQLGRA5l2sejf628lpmOaKnVc6ndZ9jZjydQnhrZlvXNYFjjZ/eHtqGlkoNnMPy8AOItvGRvdPxzUhUo7QlohpHPSv7veiJ7zD6tO53r9VseC6QRTtux2e9pycOoWPYbRANCJxU5GbSQRsINiPEJUtTUuEWVpbjy+TZmzhNzV4aNqzCHG6pg+MOH7wufMWUHE9J6kgjut8D+qbHURZXlpJJm8YBJ3Nc/E/Po3cPzRYVCqOHVv2bbfdHopza1WEU32WMTpQlQFlanRXKSA12q97RBhW80oVi44H6d6KRYhAWmzZmgmKXe0/ddxYd48doXzzEHsmMUgLXxuc1zTtBBsR5hfS4q1iPtmpBDXRVLchMwh9t747NJ/hMf8AClZYbouizp8m2SsIYbJkFN1yq9gtaHNGasMLwVh1Tpm2+rR4XlR5Sp2qEl0ARNAJ8gwkqPKCckTlhsoE8ob1OQHEroQbdBymkrEYVhmu8kklotZuwX3k8VZDQWFgAOgTujtIAwX2nMozLCFtQhUUYmTJcmylVuBhxvcg8QSCgeI4dVMH2cx8Q0+outDlhQ6qhUPGvKOjmfhmWNxCoLi2RxDhtFgPQIhTZ7Tfqp+leHjV7QDNuZ5jf+qCUtWLKtlhXRdxZLXLD8JCceUPp6gKS6cJNDbFFcoMle0G1wuXbWRvRrGNezyKxMDnMPBx12/XMeazPGYZIHmOQWcPIjiDvC+hpDdZ/p/gLZw2+VnA3G0C41h4i6u5dPFq1wUcGqknUuUVfQ7DmttUSC7j8APyj73U+nVXJlYFWKmpANhkBkAvG1pWdKNM0FK+S4R1/NTIcUVKZWFPMrCuTa6IcU+y5PrgVQvalgTJ4feWgdrCLkja6P5mnjb4h48USZWHilVNTrMc07CCD4hdvalZKhGqMnoJrBEopwq5Qte52o0FxGXllcq24Zo+51tbP0RZUosZB7kMPqx1QuvkJ+U+RWkYZo0wWuLqRjWBt7M2AFkMZ/h0oojaFYn21Mw37zPs3jfdoyPiLHxVjaSs3oHvpJe0YLtOT2feHL94bloeH1bJmB7Ddp+nEEbjyWhgyqaMvU4XB34JLSU4CV61qdDFYKg2CV2uU9qLwxrjhvtys09s8uuKVgzdrSkdAGA+oWlvYsw0rqO1qi4tPZsGo12qSDndzsuJy/4hBOaj2xuLG5PhFUwOCWPmOHDorVTVh3hP4fAxwuCCOWaKx4e07lWyaeOTkt49TLHwD219k3LioCKSYc3goM9G0bkr2X6N97+AHFcde1pcGk/36KJo1Uumd2kh3kAbgL7ld8J0QkqcyNRh3kZnoFb8D9m1HA22o55uTd7jtO2wFgArOLTxiuCrl1MpPkDYTJkEW1lYP2BA0WEYHS4QfFqIxDWGbd/Ef0ViqKrdsHzFCq2QBPz1gsh0UDqh1gbNG135BBKaStjYY3J0gDi8usC0C5IIsBcnwVIpNHK+1208hHOzfoSt6wvBY2DutHMnMnqUTdStAVV52+kW1gS7f+j51liqYspIXs5uGXnsTU805GTf1W911OxwIIBHMKk4tgDGO12Du727h0S/V/BvpcdsyR7DfMG+++1ctO/ZcRz1QuRe5/Bftf02zt1W9KqwBoHNTTUqs6QyawJWhk6M/F/IrdRmU5CxNQSh41gb7R0INiPNToGLJn2a0OEORxJ9sScjanLIQiM5iiVlV2bHOOwAnyF0QlKqmkVXruELTtsX8htA8UDGQJGiuGRtiaQNubidpO8lWyBrWjJV3CpdVtlPFYkttuyxSSpB+OpsotfU3CHCrSJJrolYttEGsjBQ6Cplp3a8Rt95pza7qOPMZonMh9UMlMZOLtAtKSplnwTTWnl7rz2MmV2vPdJ/dfsPjYq0MkBzGaxekpNaR+WVh+afdTyxj7OSRn4Hub6Fa+OblFNmTlwqM2kbKHKPXYhFE3Wke1g/eIF+g3rFoK2rc8g1U9uHavHoUUhpM7uJceLiSfMpWXVKPCQzFonJW2Hsd0qfN9nAC1m95yc4cGj5RzOfRWKLBx2LXGxuNiptPDmFcIqw6gF9iozy77czRhi9OlArGKYQYndpDkd43HqFKw/EA9t9h3jgURnfdVbET2L9YbDt/JFpMzUtr6A1eBSjuXYemqUb0a0cMpEko7u0NO/mUL0Kw33h3av+AHIcVqEDQBYLWirMaTrgcpqcNFgE8XJoyJmSVGLFyvQ2tIIIOYIslT1CG1NSpORmNbI/3p1KL3DtvBltYH+EjxV1oIgxoAyACBT0o/aEkvGGIDrrP1voG+SMtmWZmlbo18EKjYVbVWCjzVnND5KhRJahK5G0TJ6pCa6e4KRPUIZUzLkiCI6exsuUKWTMrlOxA72ahK9VbSmvEcTncAcuJ3BH8QqA0ErPcbn7fWschlb81pzZmY4+Su4JiroTc5td3nDmcyRzV3w7FY3juuHTf5Khw4fI45NNuJyCkjCn8bdFnZdt9mrjT2mjsqRxXSVrQLkgLP20Uw2TSDxTM2HSnMyOd+IkpNL/ACD2v6LDjek4ALYu8773yj9UAwKXWe4uN3E3JO03Q6rY5g7w8VAoK5zJQ5ouN44j9U5Yt0HQt5NklZpkDVJYxD8Jr2SNBB6jeOqMR2VKqdMsyYlsacDErWCbknAR8CxEzEKrXp6txBoGZQ+ik7V19yLHjc3wRLIoK2EsGou7c7SbqRiMIa0k7gT5IlRsACgaROtE7nYeZAWpShD+jLtzn/bK1h0W/ec/NFYwo1KzIIjBGsZu2bfSHaWPO6JCSyixiy6SRQ0TFjplQPSMazLDaXNaOrnAD1U9z0IrasdvAz70rf5c/UBHhVyQOV/FmsaN07YoWMG4AI4JlXaKo7oUr3pb0ejzsuws6oUSapUB9QUy95KIAenqEPnkTjgo1QbAkqJBR7K1JVXq5Bf4Qxv01v8A2RDtlSsExDtKid/35NYfh+Fv0aFa2OusrJ/Jm1BfFDskqjvcU4WrwtQolkSQKFOERlCHVRUkAmTaVynNZYL1RvB2BTG6p0lwMm+qi4RhY+N2zcOPMqTidg5rOOZ6bv75J+OfJO1OVp7UI02NNbmM1FOAVDlgCISOumdRU7LhBECUyluprYVKp4LKGjtxFbgjSCHAG6o+MYF7vLYDuHZy5LUoyq/pXThzL7xn5ZooTcXwE0muSq0VER3mkg8RkjEVZM0Z2d9D9ErDoMgpz4Mlzd9hdAmqx17f9P8Am/ouw5tTU96wiZuPxOdzA3DmnxQCSRrSMtp6BXfDcOvYAWCs4MKly0VNRn2cIqf+EGOze6Rx5uI+gsFKp9Guz+DW8c1odLh7G7rqRJCLbFfjiSM6WZtmegvZ8QUHF5g+MjofIgq64hRDgqti+EawJbkfoeqGcXTQWOStMGUzMgiUEaF4bL8rhZzTYg7kfhtZYrjTo2t1qxosTMgUmaQBBMSxJrBt8EL+kHBeWdX1YYFUJ53GVsv3XAgcgbqY+V8rthPBoz9ETbo7O5uUR8S0fQlWcUdnL7FZZb+F0X/B60PY1wNwQD5ouxZfguIy0buzqGOYwnuuIyF91xktDoK9rwCCCtPHO0ZGbE4sIhq91F42UJuWraN6fZWoW5qpWn2MiOMwsPfkFjb5W7z47P8ApEMZx2SxbTxmV5yFrBo5uccvDaqxSez/ABCpeZJXRguNyXFx8AANiVOTaqI7FFJ3IqVFU9lI07jkVf8AD6kOAN1Hq/ZBVlvdnhJ4EPb9bFCn6OYnRf5kBkYPmiIkHkO99FTyYJdmhDUQbqy2awSXOVTp9J27CbEZEHIg8CNycn0oiaM3joMz5BIqX0ObX2HamQBCHzgm/l+qquJ6TSyGzGlrP5j1ts6KDJishFgQPVM9KTFPNBFtkxFgJGsPNcqE4A5m9ztXqL26+xXun9Gp6QXE4PFgt5lIieUVxul7Roc34m7uIO0ehQynAKXqoNTv7D00k8aX0PsKeYF7HGn2MSEh9iWtTzSvQ1cQpaOs7tENxN2sLKZIULbVNe8gG+qbHqh2hJj9JT2CfkjTsVrJTlKRLZGwuL7X/j+YV4w8WCplG8CVvO4/vyVsp5Fp6Sthl6294Wa5elyiskS+0Vspiaht0IqoEWe5RZmqGrJTopmOYd87MngeY4FUn/HBYS0xk2yvexuNuRWr1cNwsb0wwoR1L7DJ9n+JyP1F/FVMmGDfyRexZclVFkl+mTpDqhmrfeTf6J+jgdM8AZk7SdgCqbaAlwDdpIAWq6NUIiYONsyquWGOH8C5inkle8M4Fg8cIyF3Ha47T/RWOCMWQWKVS46lJX6Nf4PYlRMkaWuAIPFZxi9PPQu1oXHsyfhOYb05LQX1KEY5CJGEHgihNxfAM4qS5KNLp9VAWDWX6O9Lq06O0lVOA+pdm7MRNGq1v4t7jyvZVTRnBu0rC0i4iz8T8J9T5LcMDw4MAJ2rSx/JcmXmqLpHYPgQaAXDwVhjiATYeuMqcVh8kJqSxyKZdOmX1CmiCpabaCU9W0uLA2Tc9uTh47xyKxPF9G5KWTVeLi/dcBkevAr6SknVV0qw1kzCCLoJwtcDcWXa+TGaelySaqgBHNFXUpje5h3HzG4+S5zFmObTNdRUolOkY5pII2Lla3UwJ2Lk33C+is9L+lnjx9ure6iYfXds5z2fCDa/3jvVWno73ab2PBWLQuHVYIztaTfnc3v9U6Mo5VTEzxywu0WCJzuCfbKeCIQUyktpQhekXhkrVvygR2p4L3UcdyMtpgliBQtJ9sl6v6QF90JUGswYHvN7rhscPQjeFaexSHwp/oxSpIT68m7M3n0ndTyGKeIgjMPZm1w42OY6ZpwaZU5yu+/DUcT9ApPtHwfXja9rbvD2tFtp1yG28yE9o5osyBoLgHSEZu4cm8AkS08SxHUzIUtbM6zoonDeC/u7Mxlt+i0LDajXY12y4zHA7x4FBzSqThjuzNj8J+h4puGHpic8/UQfYU6Cm4081qtlQSSkOCf1UlzFxxCmZksz9oEH20f4XeostSmCzjScdpUG2xo1fHaf08FU1MtsS5o1cytYDSXluR8Iv5/2VeoHWVfwiCzneCNMKzpOzUSoIRyJ4SKCxyUXoaOJL51HlmumXvTDnKUjmTdEYmipmO8tjP8A5D8loMVRksqwHEw3EHRk/HE0D8TS51upa76LQo3rVwfwRkapfMLe9JDqpD7leEJ5VJb6pR5KlMlqQ5ik4U+pUWpluE66NRashrSSbAZlQcikaQxDtsvuj1KGOYiVXIXvc87zlyG5RZWrGyyUpto3cUXGCTIJC5eu2rxAELmhzU3BO7K3nl+Y/NcuTtO/kK1C+JoNM3IKUGLly1kYzFBi91F6uU0CdqJJYvVy4kHYgxpcxp2kkj/iL/okdmuXJbQaZ62JL7BcuXUTZJp3FuW5T45Fy5FEBjoK8c5cuREIrukGMhl42fGR4NB38yqm2Jerlj6mblNp+Db0uNRxprydTx2cVNjavFyUuhxIa1elq5cpOG3tUWY2XLlJBVTG50hlBs7W1gRtFvh9AtK0axwTN1XZSNHeA2H94fouXJumySU0vsRq8cXjb+iwtKUuXLVMY8KbcuXKSBieUNBJ2DMqn4tiZmNhkwfzcz+i5cqerm0lFeS/oscXcn4B5aoFfMGNLjsAuVy5UEraRoydRbAWvM/vNIAOwWBtuXLlye+PBR3P7P/Z",
                category: ''
            }],
        };
    }
    componentDidMount() {
        // var fridge = this;
        // axios.get(dbUrl + '/fetch')
        //  .then((response) =>
        //      fridge.setState({foodItems: response.data})
        //  )
        //   .catch((err) =>
        //       console.log(err)
        //   );
    }

    render() {
        return (
            <div>
              <Route exact={true} path="/fridge" component={Login}/>
                {this.state.foodItems.map(item =>
                    (<FoodItem name={item.name}
                        expiryDate={item.expiryDate}
                        imageUrl={item.imageUrl}
                        category={item.category}
                    />))
                }
            </div>
        );
    }
}

FoodItem.propTypes = {
    name: PropTypes.string,
    expiryDate: PropTypes.string, // careful with what we receive
    imageUrl: PropTypes.string,
    category: PropTypes.string
};


export default FridgeContent;
